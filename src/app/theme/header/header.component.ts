import { FormControl } from '@angular/forms';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  query: string;

  queryField = new FormControl();


  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {

  }

  searchBook(title: string) {
    this.headerService.changeNav(title);

  }



}
