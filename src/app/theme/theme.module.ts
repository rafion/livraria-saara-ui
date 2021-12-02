import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ThemeModule { }
