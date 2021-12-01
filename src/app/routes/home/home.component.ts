import { HomeService } from './home.service';
import { Livro } from './../../models';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //livros$: Observable<Livro[]>;
  livros = <Livro[]>{}

  constructor(private service: HomeService) { }

  ngOnInit(): void {

    //this.livros$ = this.service.fetchLivros();
    this.service.fetchLivros().subscribe({
      next: (livros) => { this.livros = livros }
    }
    )
    console.log('livros: ', this.livros)
  }

}
