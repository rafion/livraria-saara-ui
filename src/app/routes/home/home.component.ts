import { BookService } from './../book/book.service';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { CartService } from '../cart/cart.service';

import { Livro } from './../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //livros$: Observable<Livro[]>;
  livros = <Livro[]>{}

  constructor(
    private bookService: BookService,
    private cartService: CartService,
    private snackbar: SnackbarService) { }

  ngOnInit(): void {

    //testar comunicao

    //this.livros$ = this.service.fetchLivros();
    this.bookService.fetchLivros().subscribe({
      next: (dados) => { this.livros = dados },
      error: (error) => { this.snackbar.showMessage('erro ao carregar livros', true); console.log(error) }
    }
    )
    console.log('livros: ', this.livros)
  }


  addToCart(livro: Livro) {
    this.cartService.addToCart(livro);
    this.snackbar.showMessage(`Livro: ${livro.titulo}, foi adcionado ao carrinho`);
  }

}
