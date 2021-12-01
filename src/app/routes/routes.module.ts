import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { HomeComponent } from './home/home.component';
import { SessionsModule } from './sessions/sessions.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SessionsModule,
    RoutesRoutingModule,
    MaterialModule

  ],
  exports: [
    RoutesRoutingModule,
    MaterialModule
  ]
})
export class RoutesModule { }
