import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Livro } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  //private querySearch = new EventEmitter<string>();//testar comunicação



  apiUrl = environment.SERVER_ORIGIN;

  constructor(protected http: HttpClient) { }

  //testar comunicao
  onSearch(title: string) {
    //  this.querySearch.emit(title);
  }

  fetchLivros(title?: string) {

    const params = new HttpParams()
      .set('titulo', title)
    return this.http.get<Livro[]>(`${this.apiUrl}/livros/filter?titulo`);
  }

}
