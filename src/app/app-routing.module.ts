import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditBillComponent } from './edit/edit-bill/edit-bill.component';
import { ListBillComponent } from './list/list-bill/list-bill.component';
import { ListCustomerComponent } from './list/list-customer/list-customer.component';

const routes: Routes = [
  {
    path: 'bills',
    component: ListBillComponent
  },
  {
    path: 'bills/:id',
    component: EditBillComponent
  },
  {
    path: 'customers',
    component: ListCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
