import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOrderComponent } from './list/list-order/list-order.component';
import { EditOrderComponent } from './edit/edit-order/edit-order.component';
import { EditBillComponent } from './edit/edit-bill/edit-bill.component';
import { ListBillComponent } from './list/list-bill/list-bill.component';
import { ListProductComponent } from './list/list-product/list-product.component';
import { ListCustomerComponent } from './list/list-customer/list-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCustomerComponent } from './edit/edit-customer/edit-customer.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'orders',
    component: ListOrderComponent,
  },
  {
    path: 'orders/:id',
    component: EditOrderComponent,
  },
  {
    path: 'bills',
    component: ListBillComponent
  },
  {
    path: 'bills/:id',
    component: EditBillComponent
  },
  {
    path: 'products',
    component: ListProductComponent
  },
  {
    path: 'customers',
    component: ListCustomerComponent
  },
  {
    path: 'customers/:id',
    component: EditCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
