import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  orderProperties: string[] = Object.keys(new Order());
  orderList$: BehaviorSubject<Order[]> = this.orderService.orderList$;
  // szükséges változók a filterhez
  filterKey: string = 'id';
  phrase: string = '';
  // szükséges változók a filterhez

  ascend: boolean = true;
  sortKey = '';


  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
  }


  removeOrder(order: Order): void {
    this.orderService.remove(order);
  }

  onChangeSort(data: string): void {
    this.sortKey = data;
    this.ascend = !this.ascend;
  }

}
