import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bill } from '../models/Bill';
import { Product } from '../models/Product';
import { BillService } from '../service/bill.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  billList$: BehaviorSubject<Bill[]> = this.billService.list$;
  billAmountArray: number[] = [];
  billIdArray: any[] = [];

  productList$: BehaviorSubject<Product[]> = this.productService.list$;
  productPriceArray: number[] = [];
  productIdArray: any[] = [];

  revenue: number = 0;
  productPrices: number = 0;

  constructor(
    private billService: BillService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {

    this.billList$.subscribe(data => {
      data.forEach(item => {
        this.billAmountArray.push(item.amount);
        this.revenue += item.amount;
      });

    })

    this.productList$.subscribe(data => {
      data.forEach(item => {
        this.productPriceArray.push(item.price);
        this.productPrices += item.price;
      });

    })

    this.billList$.subscribe(data => {
      data.forEach(item => {
        this.billIdArray.push(item.id);
      })
    })

    this.productList$.subscribe(data => {
      data.forEach(item => {
        this.productIdArray.push(item.id);
      })
    })


  }

}
