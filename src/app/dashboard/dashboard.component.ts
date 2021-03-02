import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bill } from '../models/Bill';
import { Customer } from '../models/Customer';
import { BillService } from '../service/bill.service';
import { CustomerService } from '../service/customer.service';

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

  customerList$: BehaviorSubject<Customer[]> = this.customerService.list$;
  customerAmount: Customer[] = [];
  countryArray: string[] = [];

  constructor(
    private billService: BillService,
    private customerService: CustomerService
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

    this.customerList$.subscribe(data => {
      data = this.customerAmount;
    })

    this.customerList$.subscribe(data => {
      data.forEach(item => {
        this.countryArray.push(item.address.country);
      })
    })
  }

}
