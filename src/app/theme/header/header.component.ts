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

  private searchQuery = new Subject<string>();
  queryField = new FormControl();

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.search();
  }

  searchBook(title: string): void {
    this.searchQuery.next(title);
  }

  search() {

    this.searchQuery.pipe(
      map(value => value.trim()),
      filter(value => value.length > 2),
      debounceTime(400),
      distinctUntilChanged(),
      tap(value => console.log(value)),
      startWith(''),
      tap((value) => this.headerService.changeNav(value))


    );

  }

}
