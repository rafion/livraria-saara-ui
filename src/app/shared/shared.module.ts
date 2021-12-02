import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MODULES: any[] = [MaterialModule, FlexLayoutModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...MODULES],
  exports: [
    CommonModule, FormsModule, RouterModule, ReactiveFormsModule, ...MODULES]

})
export class SharedModule { }
