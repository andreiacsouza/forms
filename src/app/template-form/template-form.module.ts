import { SharedModule } from './../shared/shared.module';
import { HttpModule } from '@angular/http';
import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  declarations: [
    TemplateFormComponent,
    
  ]
})
export class TemplateFormModule { }
