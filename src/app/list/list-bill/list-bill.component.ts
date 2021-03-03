import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Bill } from 'src/app/models/Bill';
import { BillService } from 'src/app/service/bill.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.scss']
})
export class ListBillComponent implements OnInit {

  // szükséges változók a filterhez
  filterKey = 'id';
  phrase = '';
  // szükséges változók a filterhez

  billProperties: string[] = Object.keys(new Bill());
  billList$: BehaviorSubject<Bill[]> = this.billService.list$;
  indexPage = 1;
  pagiLength = 5;
  ArrayLength = 0;
  ascend = true;
  sortKey = '';

  constructor(
    private billService: BillService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.billList$.subscribe(data => { this.ArrayLength = data.length })
  }

  onLength(length: number) {
    this.pagiLength = length;
  }
  onIndex(length: number) {
    this.indexPage = length;
  }

  onChangeSort(data: string): void {
    this.sortKey = data;
    this.ascend = !this.ascend;
  }

  onDelete(bill: Bill): void {
    this.billService.remove(bill);
    this.showWarning();
    this.router.navigate(['bills']);
  }

  showWarning(): void {
    this.toastr.warning('You have successfully deleted a bill!', 'Deleted', { timeOut: 4000 });
  }

  // onPagiNumber(page: number): void {
  //   this.indexPage = page;
  // }

  // onPagiBack(): void {
  //   this.indexPage--;
  //   if (this.indexPage < 1) {

  //     this.billList$.subscribe(data => this.indexPage = Math.ceil(data.length / this.pagiLength));
  //   }
  // }
  // onPagiNext(): void {
  //   this.indexPage++;
  //   let billPageLength = 0;
  //   this.billList$.subscribe(data => billPageLength = Math.ceil(data.length / this.pagiLength));
  //   if (this.indexPage > billPageLength) { this.indexPage = 1; }
  // }
  // onPagiLastNumber(): void {
  //   let lastPageNumber = 0;
  //   this.billList$.subscribe(data => {
  //     lastPageNumber = Math.ceil(data.length / this.pagiLength);
  //     this.indexPage = lastPageNumber;
  //   });
  // }

}
