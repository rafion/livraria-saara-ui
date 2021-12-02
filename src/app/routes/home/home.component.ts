import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

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

  constructor(private service: HomeService, private snackbar: SnackbarService) { }

  ngOnInit(): void {

    //this.livros$ = this.service.fetchLivros();
    this.service.fetchLivros().subscribe({
      next: (livros) => { this.livros = livros },
      error: (error) => { this.snackbar.showMessage('erro ao carregar livros', true); console.log(error) }
    }
    )
    console.log('livros: ', this.livros)
  }

}
