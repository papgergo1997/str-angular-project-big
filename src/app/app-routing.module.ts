import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './common/order-list/order-list.component';
import { EditBillComponent } from './edit/edit-bill/edit-bill.component';
import { ListBillComponent } from './list/list-bill/list-bill.component';

const routes: Routes = [
  {
    path: "",
    component: OrderListComponent,
  },
  {
    path: 'bills',
    component: ListBillComponent
  },
  {
    path: 'bills/:id',
    component: EditBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
