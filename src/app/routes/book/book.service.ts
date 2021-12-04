import { take } from 'rxjs/operators';
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
    //melhorar para quando não tem title
    if (title != 'all') {
      const params = new HttpParams()
        .set('titulo', title)
      return this.http.get<Livro[]>(`${this.apiUrl}/livros/filter?${params}`).pipe(take(1));
    }
    return this.http.get<Livro[]>(`${this.apiUrl}/livros`).pipe(take(1));
  }

}
