import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutIndexComponent } from './about-index/about-index.component';
import { ContactFormComponent } from '../contact/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AboutIndexComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ContactFormComponent
  ]
})
export class AboutModule { }
