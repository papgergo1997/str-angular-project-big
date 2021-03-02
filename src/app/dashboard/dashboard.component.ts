import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bill } from '../models/Bill';
import { Order } from '../models/Order';
import { BillService } from '../service/bill.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  billList$: BehaviorSubject<Bill[]> = this.billService.list$;
  billAmountArray: number[] = [];
  billIdArray: any[] = [];
  revenue: number = 0;

  orderList$: BehaviorSubject<Order[]> = this.orderService.orderList$;
  orderAmountArray: number[] = [];
  orderIdArray: any[] = [];

  constructor(
    private billService: BillService,
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {

    this.billList$.subscribe(data => {
      data.forEach(item => {
        this.billAmountArray.push(item.amount);
        this.revenue += item.amount;
      });

    })

    this.billList$.subscribe(data => {
      data.forEach(item => {
        this.billIdArray.push(item.id);
      })
    })


    this.orderList$.subscribe(data => {
      data.forEach(item => {
        this.orderAmountArray.push(item.amount);
      });
    })
    this.orderList$.subscribe(data => {
      data.forEach(item => {
        this.orderIdArray.push(item.id);
      })
    })

  }

}
