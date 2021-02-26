import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/service/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/models/Address';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  // szükséges változók a filterhez
  filterKey = 'id';
  phrase = '';
  // szükséges változók a filterhez
  aFilterKey = 'zip'
  aPhrase = '';
  sortKey = '';
  addressProps: string[] = Object.keys(new Address());
  customerProps: string[] = Object.keys(new Customer());
  customerList$: BehaviorSubject<Customer[]> = this.customerService.list$;
  ascend = true;
  zip = '';

  constructor(private customerService: CustomerService,
    private router: Router,
    private toastr: ToastrService) { this.customerService.getAll(); }

  ngOnInit(): void {
  }

  onChangeSort(data: string): void {
    if (data === 'address') {
      this.sortKey = 'address';
      this.zip = 'zip';
    } else {
      this.sortKey = data;
    }
    this.ascend = !this.ascend;
  }

  onDeleteClick(customer: Customer): void {
    this.customerService.remove(customer).subscribe();
    this.router.navigate(['customers']);
    this.toastr.warning('You have successfully deleted a customer', 'Deleted', { timeOut: 3000 });
    this.customerService.getAll();
  }
}
