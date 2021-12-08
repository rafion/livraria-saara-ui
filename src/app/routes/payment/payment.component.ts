import { Router } from '@angular/router';
import { InformDialogComponent } from './../../shared/componets/inform-dialog/inform-dialog.component';
import { Observable } from 'rxjs';
import { Pagamento, MeioPagamento, Pedido, ItemPedido } from './../../models';
import { User } from 'src/app/models';
import { AuthService } from './../sessions/auth.service';
import { CartService } from './../cart/cart.service';
import { PaymentService } from './payment.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  user = <User>{};
  pagamento = <Pagamento>{};
  meiosPagamento$: Observable<MeioPagamento[]>;
  pedido = <Pedido>{};
  itensPedido: ItemPedido[] = [];

  constructor(
    private paymentService: PaymentService,
    private authService: AuthService,
    private cartService: CartService,
    private dialog: MatDialog,
    private router: Router) { }


  ngOnInit(): void {
    this.getUser();
    this.meiosPagamento$ = this.paymentService.listAll();
  }

  getUser() {
    this.authService.user().subscribe(
      {
        next: (user) => this.user = user
      }
    )
    console.log(this.user);

    console.log('total Carrinho: ', this.total);
  }

  //retorna o total em itens do carrinho
  get total() {
    return +(this.cartService.getItens().map(t => t.precoUnitario).reduce((acc, value) => acc + value, 0) || 0).toFixed(2);
  }

  get quantidadeItens() {
    return this.cartService.getItens().length;
  }

  pagar() {
    if (this.pedido.pagamento == null) {
      alert("Escolha um meio de pagamento.");
      return;
    }

    this.pedido.clienteId = this.user.id;
    this.pedido.valorTotal = this.total;
    this.pedido.status = 'CONFIRMADO';
    this.setItensPedido();

    if (this.pedido.itens == null) {
      console.log(this.pedido);
      console.log(this.pedido.itens);
      alert("Seu carrinho está vazio.");
      return;
    }

    this.paymentService.savePedido(this.pedido).subscribe({
      next: (pedido) => {
        this.openDialog("Pagamento efetuado com sucesso", `Pedido n° ${pedido.id},\n Total: ${pedido.valorTotal}`)
          , console.log('pedido salvo', pedido),
          this.cartService.clearItens();
        this.pedido = <Pedido>{};

      },
      error: (error) => console.log('erro', error)
    });
    this.cartService.clearItens();

  }

  get itensCart() {
    return this.cartService.getItens();
  }

  //sequancia de itens vai ser tratada na api
  //gambiarra da pega, mas estou sem tempo
  setItensPedido() {

    //this.pedido.itens = this.cartService.getItens().map(i => ({ item: null, livroId: i.id, quantidade: 1, precoUnitario: i.precoUnitario, precoTotal: i.precoUnitario }));

    for (let i = 0, itens = this.itensCart.length; i < itens; i++) {

      this.itensPedido.push({ item: i + 1, livroId: this.itensCart[i].id, quantidade: 1, precoUnitario: this.itensCart[i].precoUnitario, precoTotal: this.itensCart[i].precoUnitario })

    }
    this.pedido.itens = this.itensPedido;

  }

  //não é a melhor forma de fazer isso...mas não vai dar tempo...
  setFormaPagamento(meioPagamento: MeioPagamento) {
    console.log(meioPagamento)
    this.pagamento.meioPagamentoId = meioPagamento.id;
    this.pagamento.valorTotal = this.total;
    this.pedido.pagamento = this.pagamento;
  }

  setTotalPago(total: number) {
    console.log(total);
  }

  openDialog(title: string, message: string) {

    const dialogRef = this.dialog.open(InformDialogComponent, {
      data: { title, message }
    }
    );
    dialogRef.afterClosed().subscribe(() => {

      this.router.navigateByUrl('/home')

    })
  }
}
