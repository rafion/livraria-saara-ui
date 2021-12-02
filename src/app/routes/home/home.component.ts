import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { CartService } from '../cart/cart.service';

import { Livro } from './../../models';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //livros$: Observable<Livro[]>;
  livros = <Livro[]>{}

  constructor(
    private homeService: HomeService,
    private cartService: CartService,
    private snackbar: SnackbarService) { }

  ngOnInit(): void {

    //this.livros$ = this.service.fetchLivros();
    this.homeService.fetchLivros().subscribe({
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
