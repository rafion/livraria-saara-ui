import { SnackbarService } from './../../shared/services/snackbar.service';
import { catchError, take, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MeioPagamento, Pedido } from './../../models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = environment.SERVER_ORIGIN;

  constructor(private http: HttpClient, private snackbar: SnackbarService) { }

  listAll(): Observable<MeioPagamento[]> {
    return this.http.get<MeioPagamento[]>(`${this.apiUrl}/meiosPagamento`)
  }

  savePedido(pedido: Pedido): Observable<Pedido> {
    console.log('service pag: ', pedido);
    return this.http.post<Pedido>(`${this.apiUrl}/pedidos`, pedido).pipe(
      tap((newPedido: Pedido) => this.logSuccees(`added pedido w/ id=${newPedido.id}`)),
      take(1),
      catchError(this.handleError<Pedido>('create'))
    );

  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.logError(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  logError(message: string) {
    this.snackbar.errorHandler(message);
  }

  logSuccees(message: string) {
    console.log(message)
    //this.snackBar.showMessage(message);
  }


}
