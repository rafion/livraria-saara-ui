import { take } from 'rxjs/operators';
import { Endereco } from './../../models';
import { User } from 'src/app/models';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiUrl = environment.SERVER_ORIGIN;

  constructor(private http: HttpClient, private snackbar: SnackbarService) { }

  updateAccount(user: User) {

    return this.http.put<User>(`${this.apiUrl}/clientes/${user.id}`, user);
  }

  updateEndereco(clienteId: number, endereco: Endereco) {
    const params = new HttpParams()
      .set('clienteId', clienteId)
    return this.http.put<User>(`${this.apiUrl}/clientes/updateEndereco?${params}`, endereco).pipe(take(1));
  }
}
