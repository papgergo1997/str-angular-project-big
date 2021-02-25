import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './page-components/sidebar/sidebar.component';
import { NavbarComponent } from './page-components/navbar/navbar.component';
import { FooterComponent } from './page-components/footer/footer.component';
import { ListOrderComponent } from './list/list-order/list-order.component';
import { EditOrderComponent } from './edit/edit-order/edit-order.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ListBillComponent } from './list/list-bill/list-bill.component';
import { EditBillComponent } from './edit/edit-bill/edit-bill.component';
import { ListProductComponent } from './list/list-product/list-product.component';
import { ListCustomerComponent } from './list/list-customer/list-customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCustomerComponent } from './edit/edit-customer/edit-customer.component';
import { ToastrModule } from 'ngx-toastr';
import { EditProductComponent } from './edit/edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ListOrderComponent,
    EditOrderComponent,
    FilterPipe,
    ListBillComponent,
    EditBillComponent,
    ListProductComponent,
    ListCustomerComponent,
    DashboardComponent,
    EditCustomerComponent,
    EditProductComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
