import { SnackbarService } from './../../shared/services/snackbar.service';
import { Injectable } from '@angular/core';
import { Livro } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens: Livro[] = [];


  constructor(private snackBar: SnackbarService) { }

  addToCart(livro: Livro) {
    this.itens.push(livro);

  }

  removeToCart(livro: Livro) {
    let position = this.itens.indexOf(livro);
    this.itens.splice(position, 1);
    this.itens = Array.from(this.itens);
    this.snackBar.showMessage(`livro: ${livro.titulo}, foi removido do carrinho!`)

  }

  getItens() {
    return this.itens;
  }

  clearItens() {
    this.itens = [];
    return this.itens;
  }
}
