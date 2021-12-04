import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap, startWith } from 'rxjs/operators';
import { HeaderService } from './../../theme/header/header.service';
import { BookService } from './../book/book.service';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { CartService } from '../cart/cart.service';

import { Livro } from './../../models';
import { Subscription, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //livros$: Observable<Livro[]>;
  // livros = <Livro[]>{};
  livros$: Observable<Livro[]>;
  subscription: Subscription;
  //queryHeader: string;
  private searchTerms = new Subject<string>();

  constructor(
    private bookService: BookService,
    private headerService: HeaderService,
    private cartService: CartService,
    private snackbar: SnackbarService) { }

  ngOnInit(): void {

    this.getQuery(); //paga do component header
    this.getBooksByTitle(); //trata a informação para evitar requisições desenecessarias

  }

  getQuery() {
    this.subscription = this.headerService.query$
      .subscribe({
        next: (query) => {
          (query != null ? this.searchSubject(query) : null)
        },
        error: (erro) => { console.log(erro) }
      }
      );
  }

  //apenas para subscrição do metodo getBooksByTitle
  searchSubject(term: string): void {
    this.searchTerms.next(term);
  }

  getBooksByTitle() {
    this.livros$ = this.searchTerms.pipe(
      map(value => value.trim()),
      filter(value => value.length > 2),
      debounceTime(400),
      distinctUntilChanged(),
      startWith('all'),
      tap(value => console.log(value)),
      switchMap((value: string) => this.bookService.fetchLivros(value)),
      map((res) => res),
    )
  }

  /*
  search(query: string) {
    console.log('searchFromHeader', this.queryHeader)
    if (this.queryHeader) {
      console.log('query', this.queryHeader);
      this.fetchLivros();

    }
  }
  */

  fetchLivros(title?: string) {
    this.livros$ = this.bookService.fetchLivros(title); /*.subscribe({
      next: (dados) => { this.livros = dados },
      error: (error) => { this.snackbar.showMessage('erro ao carregar livros', true); console.log(error) }
    }
    )*/
  }




  addToCart(livro: Livro) {
    this.cartService.addToCart(livro);
    this.snackbar.showMessage(`Livro: ${livro.titulo}, foi adcionado ao carrinho`);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
