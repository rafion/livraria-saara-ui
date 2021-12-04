import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { RoutesRoutingModule } from './routes-routing.module';
import { SessionsModule } from './sessions/sessions.module';


@NgModule({
  declarations: [HomeComponent, CartComponent, BookComponent],
  imports: [
    CommonModule,
    SessionsModule,
    RoutesRoutingModule,
    SharedModule

  ],
  exports: [

  ]
})
export class RoutesModule { }
