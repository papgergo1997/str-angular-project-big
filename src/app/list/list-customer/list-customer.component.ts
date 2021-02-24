import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  customerList$: BehaviorSubject<Customer[]> = this.customerService.list$

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onDeleteClick(customer: Customer): void {
    this.customerService.remove(customer);
    this.router.navigate(['customers']);
  }
}
