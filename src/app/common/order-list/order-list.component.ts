import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderProperties: string[] = Object.keys(new Order());

  constructor() { }

  ngOnInit(): void {
    console.log(this.orderProperties);
  }

}
