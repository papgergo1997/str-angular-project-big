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

  //phrase: string = "";


  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
  }


  removeOrder(order: Order) {
    this.orderService.remove(order);
  }

/*   onChangePhrase(event: Event) {
    this.phrase = (event.target as HTMLInputElement).value;
  } */

}