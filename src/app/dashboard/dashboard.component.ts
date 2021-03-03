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
  countryArray: any[] = [];
  customerArray: any[] = [];
  customerData: number[] = [];
  countryData: any[] = [];


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
  }

}
