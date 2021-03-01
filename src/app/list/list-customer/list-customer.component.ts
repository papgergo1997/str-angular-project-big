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
  filterKey: string = 'id';
  phrase: string = '';
  // szükséges változók a filterhez

  aFilterKey: string = 'country';
  sortKey: string = '';
  addressProps: string[] = Object.keys(new Address());

  cols: { title: string, key: string }[] = [
    { key: 'id', title: 'Id' },
    { key: 'firstName', title: 'FirstName' },
    { key: 'lastName', title: 'LastName' },
    { key: 'email', title: 'Email' },
    { key: 'address', title: 'Address' },
    { key: 'active', title: 'Active' },
  ];

  customerProps: string[] = Object.keys(new Customer());

  lastDragKey: string = '';

  customerList$: BehaviorSubject<Customer[]> = this.customerService.list$;
  ascend: boolean = true;
  zip: string = '';
  indexPage = 1;
  pagiLength = 5;
  ArrayLength = 0;

  constructor(private customerService: CustomerService,
    private router: Router,
    private toastr: ToastrService) { this.customerService.getAll(); }

  onHeaderDragStart(event: DragEvent): void {
    this.lastDragKey = (event.target as HTMLTableHeaderCellElement).id;
  }

  onHeaderDrop(event: DragEvent): void {
    event.preventDefault();
    const targetID: string = (event.target as HTMLTableHeaderCellElement).id;
    const from = this.cols.findIndex(col => col.key === this.lastDragKey);
    const to = this.cols.findIndex(col => col.key === targetID);
    const temp = Object.assign({}, this.cols[from]);
    this.cols.splice(from, 1);
    this.cols.splice(to, 0, temp);
  }

  ngOnInit(): void {
    this.customerList$.subscribe(data => { this.ArrayLength = data.length })
  }

  onLength(length: number) {
    this.pagiLength = length;
  }
  onIndex(length: number) {
    this.indexPage = length;
  }

  onChangeSort(data: string): void {
    if (data === 'address') {
      this.sortKey = 'address';
      this.zip = 'zip';
    } else {
      this.zip = '';
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
