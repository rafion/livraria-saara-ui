import { AccountService } from './account.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnderecoDialogComponent } from 'src/app/shared/componets/endereco-dialog/endereco-dialog.component';

import { Endereco, Pedido, User } from './../../models';
import { PedidoService } from './../../shared/services/pedido.service';
import { AuthService } from './../sessions/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user = <User>{};
  dataSource: Pedido[] = [];
  displayedColumns: string[] = ['id', 'data', 'total', 'status'];
  endereco = <Endereco>{};

  constructor(
    private pedidoService: PedidoService,
    private accountService: AccountService,
    private dialog: MatDialog,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();

    this.pedidoService.findAllByClienteId(this.user.id).subscribe({
      next: (pedidos) => this.dataSource = pedidos,
      error: (erro) => console.log(erro)
    });

  }

  getUser() {
    this.authService.user().subscribe(
      {
        next: (user) => this.user = user,
        error: (error) => console.log(error)
      }
    )
  }


  openEnderecoDialog(): void {
    const dialogRef = this.dialog.open(EnderecoDialogComponent, {
      minWidth: '500px',

      data: {
        cep: this.endereco.cep,
        municipio: this.endereco.municipio,
        estado: this.endereco.estado,
        bairro: this.endereco.bairro,
        logradouro: this.endereco.logradouro,
        numero: this.endereco.numero,
        complemento: this.endereco.complemento,
        // cliente: this.cliente.id
      }

    });
    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        this.endereco = result;
        this.user.endereco = result;
        console.log('user: ', this.user)
        console.log('endereco adcionado');
        console.log(this.endereco);

        this.accountService.updateAccount(this.user).subscribe({
          next: (response) => console.log(response),
          error: (error) => console.log(error)
        })
      }

    });
  }

}
