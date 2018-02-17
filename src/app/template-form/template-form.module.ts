import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { TemplateFormComponent } from './template-form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TemplateFormComponent
  ]
})
export class TemplateFormModule { }
