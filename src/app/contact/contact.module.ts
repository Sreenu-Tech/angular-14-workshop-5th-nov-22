import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactIndexComponent } from './contact-index/contact-index.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    ContactIndexComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ContactFormComponent
  ]
})
export class ContactModule { }
