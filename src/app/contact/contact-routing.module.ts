import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactIndexComponent } from './contact-index/contact-index.component';

const routes: Routes = [
  {
    path:'',
    component:ContactIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
