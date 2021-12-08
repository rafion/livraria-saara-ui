import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformDialogComponent } from './componets/inform-dialog/inform-dialog.component';
import { EnderecoDialogComponent } from './componets/endereco-dialog/endereco-dialog.component';
import { NgxMaskModule } from 'ngx-mask';

const MODULES: any[] = [MaterialModule, FlexLayoutModule];

@NgModule({
  declarations: [
    InformDialogComponent,
    EnderecoDialogComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule, ReactiveFormsModule, NgxMaskModule.forRoot(), ...MODULES],
  exports: [
    CommonModule, FormsModule, RouterModule, ReactiveFormsModule, NgxMaskModule, ...MODULES]

})
export class SharedModule { }
