import {Component, OnInit} from '@angular/core';
import {BillService} from '../../service/bill.service';
import {Bill} from '../../models/Bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  data: any;
  constructor(public billService: BillService) {
    this.data  = billService.list$[];
  }

  ngOnInit(): void {
  }

}
