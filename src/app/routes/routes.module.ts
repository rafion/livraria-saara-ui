import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { SessionsModule } from './sessions/sessions.module';
import { CartComponent } from './cart/cart.component';
import { RoutesRoutingModule } from './routes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HomeComponent, CartComponent],
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
