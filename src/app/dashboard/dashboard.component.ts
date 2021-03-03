import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bill } from '../models/Bill';
import { Customer } from '../models/Customer';
import { BillService } from '../service/bill.service';
import { CustomerService } from '../service/customer.service';
import { Order } from '../models/Order';
import { OrderService } from '../service/order.service';
import { ProductService } from '../service/product.service';
import { Product } from '../models/Product';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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

  customerList$: BehaviorSubject<Customer[]> = this.customerService.list$;
  countryArray: any[] = [];
  customerArray: any[] = [];
  customerData: number[] = [];
  countryData: any[] = [];


  constructor(
    private billService: BillService,
    private orderService: OrderService,
    private customerService: CustomerService,
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
      })
    })

    this.customerList$.subscribe(data => {
      data.forEach(item => {
        this.countryArray.push(item.address.country)
      })
      this.countryArray.forEach((el: any) => { this.countryData[el] = this.countryData[el] ? (this.countryData[el] += 1) : 1; });
      this.countryData = Object.keys(this.countryData);
    })

    this.customerList$.subscribe(data => {
      data.forEach(item => {
        this.customerArray.push(item.address.country)
      })
      this.customerArray.forEach((el: any) => { this.customerData[el] = this.customerData[el] ? (this.customerData[el] += 1) : 1; });
      this.customerData = Object.values(this.customerData);
    })

    // this.customerData == this.countryArray.values.length

    // this.customerList$.subscribe(data => {
    //   data.forEach(item => {
    //     this.countryArray.push(item.active);
    //   })
    // })  



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
          case true:
            this.accum_active_products += 1;
        }
      });
    });
    // this counts active users
    this.customerList$.subscribe(data => {
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
