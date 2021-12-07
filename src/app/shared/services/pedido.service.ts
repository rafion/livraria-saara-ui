import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pedido } from './../../models';
import { SnackbarService } from './snackbar.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  apiUrl = environment.SERVER_ORIGIN;

  constructor(private http: HttpClient, private snackbar: SnackbarService) { }


  savePedido(pedido: Pedido): Observable<Pedido> {
    console.log('service pag: ', pedido);
    return this.http.post<Pedido>(`${this.apiUrl}/pedidos`, pedido);
  }


  findAllByClienteId(id: number) {
    const params = new HttpParams()
      .set('clienteId', id)
    return this.http.get<Pedido[]>(`${this.apiUrl}/pedidos/findAllByClienteId?${params}`).pipe(take(1));
  }
}
