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
  filterKey = 'id';
  phrase = '';
  // szükséges változók a filterhez

  ascend = true;
  sortKey = '';

/*   fgh: number[] = []; */

  constructor(
    private orderService: OrderService,
  ) {

/*     this.orderList$.forEach( orders => {
      orders.forEach( order => {
        this.fgh.push(order.amount);
      } )
    } );

    this.orderList$.forEach( orders => {
      console.log(orders);
    } ); */

  }

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
