import { InformDialogComponent } from './../../shared/componets/inform-dialog/inform-dialog.component';
import { Observable } from 'rxjs';
import { Pagamento, MeioPagamento } from './../../models';
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

  constructor(private paymentService: PaymentService,
    private authService: AuthService,
    private cartService: CartService,
    private dialog: MatDialog) { }


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
    return this.cartService.getItens().map(t => t.precoUnitario).reduce((acc, value) => acc + value, 0) || 0;
  }

  get quantidadeItens() {
    return this.cartService.getItens().length;
  }

  pagar() {
    console.log('teste');
    this.cartService.clearItens();
    this.openDialog();
  }

  setFormaPagamento(meioPagamento: MeioPagamento) {
    console.log(meioPagamento);
  }

  setTotalPago(total: number) {
    console.log(total);
  }

  openDialog() {

    let msg = { title: "Inform", message: "Pagamento Realizado com sucesso!" };

    this.dialog.open(InformDialogComponent), {
      data: {
        msg

      }
    }
  }
}
