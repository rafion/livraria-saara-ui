import { CartService } from './../../routes/cart/cart.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, tap } from 'rxjs/operators';

import { User } from './../../models';
import { AuthService } from './../../routes/sessions/auth.service';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  query: string;

  queryField = new FormControl();

  user = <User>{};
  hiddenBadge = false;


  constructor(
    private headerService: HeaderService,
    private auth: AuthService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef,
    public router: Router) { }

  ngOnInit(): void {



    this.auth
      .user()
      .pipe(
        tap(user => (this.user = user)),
        debounceTime(10)
      )
      .subscribe(() => this.cdr.detectChanges());

  }

  searchBook(title: string) {
    this.headerService.changeNav(title);

  }

  logout() {
    console.log('logout');
    this.auth.logout();
    this.router.navigateByUrl('/home');
    this.user = <User>{};
    this.user.nome = '';

  }

  toggleBadgeVisibility() {
    this.hiddenBadge = !this.hiddenBadge;
  }

  get quantidadeItens() {
    return this.cartService.getItens().length;
  }

}
