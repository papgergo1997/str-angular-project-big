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

  billList: BehaviorSubject<Bill[]> = this.billService.list$;

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

}
