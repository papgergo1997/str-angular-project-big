import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Bill } from 'src/app/models/Bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  bill$: Observable<Bill> = this.activatedRoute.params.pipe(
    switchMap(params => this.billService.get(params.id))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private billService: BillService,
    private router: Router,) { }

  ngOnInit(

  ): void {
  }

  onUpdate(bill: Bill): void {
    if (bill.id === 0) {
      this.billService.create(bill);
      this.router.navigate(['bills']);
    } else {
      this.billService.update(bill).subscribe(
        () => this.router.navigate(['bills'])
      );
    }
  }
}
