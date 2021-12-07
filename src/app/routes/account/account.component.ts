import { AuthService } from './../sessions/auth.service';
import { Pedido, User } from './../../models';
import { PedidoService } from './../../shared/services/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  user = <User>{};
  dataSource: Pedido[] = [];
  displayedColumns: string[] = ['id', 'data', 'total', 'status'];

  constructor(private pedidoService: PedidoService, private authService: AuthService) { }

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

}
