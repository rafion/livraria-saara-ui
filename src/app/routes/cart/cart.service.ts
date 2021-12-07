import { Injectable } from '@angular/core';
import { Livro } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens: Livro[] = [];


  constructor() { }

  addToCart(livro: Livro) {
    this.itens.push(livro);

  }

  getItens() {
    return this.itens;
  }

  clearItens() {
    this.itens = [];
    return this.itens;
  }
}
