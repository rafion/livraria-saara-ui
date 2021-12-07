import { Livro } from 'src/app/models';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    //console.log(this.itens);
  }

  get itens() {
    return this.cartService.getItens();
  }

  renoveToCart(livro: Livro) {
    this.cartService.removeToCart(livro);
  }

}
