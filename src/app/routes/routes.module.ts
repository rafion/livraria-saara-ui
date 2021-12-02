import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { HomeComponent } from './home/home.component';
import { SessionsModule } from './sessions/sessions.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SessionsModule,
    FlexLayoutModule,
    RoutesRoutingModule,
    MaterialModule

  ],
  exports: [
    RoutesRoutingModule,
    MaterialModule
  ]
})
export class RoutesModule { }
