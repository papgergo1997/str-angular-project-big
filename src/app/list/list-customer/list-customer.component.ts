import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/service/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  // szükséges változók a filterhez
  filterKey: string = 'id';
  phrase: string = '';
  // szükséges változók a filterhez
  sortKey: string = '';  
  customerProps: string[] = Object.keys(new Customer());
  customerList$: BehaviorSubject<Customer[]> = this.customerService.list$;
  ascend: boolean = true;
  zip: string = ''

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
    this.toastr.warning('You have successfully deleted a customer', 'Deleted', { timeOut: 3000 })
    this.customerService.getAll();
  }
}
