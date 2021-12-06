import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _querySearch = new BehaviorSubject<string>(null);

  query$ = this._querySearch.asObservable();

  changeNav(query: string) {
    this._querySearch.next(query);
  }

}
