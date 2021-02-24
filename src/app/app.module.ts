import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './page-components/sidebar/sidebar.component';
import { NavbarComponent } from './page-components/navbar/navbar.component';
import { FooterComponent } from './page-components/footer/footer.component';
import { ListBillComponent } from './list/list-bill/list-bill.component';
import { EditBillComponent } from './edit/edit-bill/edit-bill.component';
import { ListCustomerComponent } from './list/list-customer/list-customer.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    ListBillComponent,
    EditBillComponent,
    ListCustomerComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
