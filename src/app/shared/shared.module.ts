import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformDialogComponent } from './componets/inform-dialog/inform-dialog.component';

const MODULES: any[] = [MaterialModule, FlexLayoutModule];

@NgModule({
  declarations: [
    InformDialogComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...MODULES],
  exports: [
    CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...MODULES]

})
export class SharedModule { }
