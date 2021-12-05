import { User } from 'src/app/models';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, share, take, tap } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/shared/services/storage.service';
import { Observable, BehaviorSubject } from 'rxjs';

export const guest: User = {
  id: null,
  username: '',
  password: '',
  nome: '',
  cpf: '',
  email: '',
  endereco: null

};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.SERVER_ORIGIN;

  private user$ = new BehaviorSubject<User>(guest); //evita que o perfil fique null ocasionado erro
  //user = <User>{};

  constructor(private http: HttpClient, snackbar: SnackbarService, private storage: LocalStorageService) { }

  login(username: string, password: string) {
    return this.http
      .post<any>(`${this.apiURL}/signin`, { username, password })
      .pipe(
        tap(token => { this.storage.set('TOKEN', token), this.setUser(username) }),
        take(1),
      );
  }

  register(nome: string, username: string, password: string, email: string) {
    return this.http
      .post<any>(`${this.apiURL}/signup`, { nome, username, password, email })

  }

  getUser() {
    return this.user;
  }

  getUserByUsername(username: string): Observable<User> {
    const params = new HttpParams()
      .set('username', username)
    return this.http.get<User>(`${this.apiURL}/clientes/findByUsername?${params}`);

  }


  setUser(username: string) {
    this.getUserByUsername(username).subscribe({
      next: (user) => { this.user$.next(Object.assign({}, guest, user)), this.storage.set('user', user) },
      error: (error) => console.log(error),
      //complete: () => (console.log('usercomplete: ', this.user.nome))
    })
    //console.log('set user: ', this.getUser())

  }

  /*
  clearUser(user: User) {
    this.user = <User>{}
  }
  */

  logout() {
    this.storage.clear();
    this.user$ = new BehaviorSubject<User>(guest);
  }

  user() {
    //console.log('user:', this.user$);
    return this.user$.pipe(share());
  }

}
