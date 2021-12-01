import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from './../../models';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  apiUrl = environment.SERVER_ORIGIN;

  constructor(protected http: HttpClient) { }

  fetchLivros(title?: string) {
    const params = new HttpParams()
      .set('titulo', title)
    return this.http.get<Livro[]>(`${this.apiUrl}/livros/filter?titulo`);
  }
}
