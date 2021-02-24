import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './common/order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './page-components/sidebar/sidebar.component';
import { NavbarComponent } from './page-components/navbar/navbar.component';
import { FooterComponent } from './page-components/footer/footer.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ListBillComponent } from './list/list-bill/list-bill.component';
import { EditBillComponent } from './edit/edit-bill/edit-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    FilterPipe,
    ListBillComponent,
    EditBillComponent,
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
