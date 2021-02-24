import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Bill } from 'src/app/models/Bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.scss']
})
export class ListBillComponent implements OnInit {

  billList: BehaviorSubject<Bill[]> = this.billService.list$;

  constructor(
    private billService: BillService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onDelete(bill: Bill): void {
    this.billService.remove(bill);
    this.router.navigate(['bills']);
  }

}
