import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, take, tap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.SERVER_ORIGIN;

  constructor(private http: HttpClient, snackbar: SnackbarService, private storage: LocalStorageService) { }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${this.apiURL}/signin`, { username, password })
      .pipe(
        tap(token => this.storage.set('TOKEN', token)),
        take(1),
      );
  }

  register(nome: string, username: string, password: string, email: string) {
    return this.http
      .post<any>(`${this.apiURL}/signup`, { nome, username, password, email })

  }

}
