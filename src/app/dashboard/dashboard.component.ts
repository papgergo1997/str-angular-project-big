import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bill } from '../models/Bill';
import { Order } from '../models/Order';
import { BillService } from '../service/bill.service';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../models/Customer';
import { Product } from '../models/Product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  customerlist$: BehaviorSubject<Customer[]> = this.customerservice.list$;
  productlist$: BehaviorSubject<Product[]> = this.productsservice.list$;
  billList$: BehaviorSubject<Bill[]> = this.billService.list$;
  billAmountArray: number[] = [];
  billIdArray: any[] = [];
  revenue = 0;

  orderList$: BehaviorSubject<Order[]> = this.orderService.orderList$;
  orderAmountArray: number[] = [];
  orderIdArray: any[] = [];
  accum_bill = 0;
  accum_active_customers = 0;
  accum_active_products = 0;
  accum_active_unpaid_orders = 0;
  warn_acum = 0;

  constructor(
    private billService: BillService,
    private orderService: OrderService,
    private customerservice: CustomerService,
    private productsservice: ProductService
  ) {
  }

  ngOnInit(): void {

    this.billList$.subscribe(data => {
      data.forEach(item => {
        this.billAmountArray.push(item.amount);
        this.revenue += item.amount;
      });

    });

    this.billList$.subscribe(data => {
      data.forEach(item => {
        this.billIdArray.push(item.id);
      });
    });

    // this counts new  bills
    this.billList$.subscribe(data => {
      data.forEach(item => {
        switch (item.status) {
          case 'new':
            this.accum_bill += 1;
            warner();
        }
      });
    });
    // this counts new  orders
    this.orderService.getAll();
    this.orderList$.subscribe(data => {
      data.forEach(item => {
        switch (item.status) {
          case 'new':
            this.accum_active_unpaid_orders += 1;
            warner();
        }
      });
    });
    // this counts active products
    this.productsservice.getAll();
    this.productlist$.subscribe(data => {
      data.forEach(item => {
        switch (item.active) {
          case 'true':
            this.accum_active_products += 1;
        }
      });
    });
    // this counts active users
    this.customerservice.getAll();
    this.customerlist$.subscribe(data => {
      data.forEach(item => {
        switch (item.active) {
          case true:
            this.accum_active_customers += 1;
        }
      });
    });
    // buggy , needs to be async somehow
    const
      warner = (): void => {
        this.warn_acum = this.accum_bill + this.accum_active_unpaid_orders;
      };


    this.orderList$.subscribe(data => {
      data.forEach(item => {
        this.orderAmountArray.push(item.amount);
      });
    });
    this.orderList$.subscribe(data => {
      data.forEach(item => {
        this.orderIdArray.push(item.id);
      });
    });
  }
}
