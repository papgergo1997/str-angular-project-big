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

  billProperties: string[] = Object.keys(new Bill());
  billList$: BehaviorSubject<Bill[]> = this.billService.list$;
  indexPage: number = 1;
  pagiLength: number = 5;

  constructor(
    private billService: BillService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(bill: Bill): void {
    this.billService.remove(bill);
    this.showWarning();
    this.router.navigate(['bills']);
  }

  showWarning() {
    this.toastr.warning('Sikeresen törölted az eseményt!', 'Üzenet', { timeOut: 4000 })
  }

  onPagiNumber(page: number) {
    this.indexPage = page;
  }

  onPagiBack() {
    this.indexPage--;
    if (this.indexPage < 1) {

      this.billList$.subscribe(data => this.indexPage = Math.ceil(data.length / this.pagiLength))
    }
  }
  onPagiNext() {
    this.indexPage++;
    let billPageLength = 0;
    this.billList$.subscribe(data => billPageLength = Math.ceil(data.length / this.pagiLength))
    if (this.indexPage > billPageLength) { this.indexPage = 1 }
  }
  onPagiLastNumber() {
    let lastPageNumber = 0;
    this.billList$.subscribe(data => {
      lastPageNumber = Math.ceil(data.length / this.pagiLength);
      this.indexPage = lastPageNumber
    })
  }

}
