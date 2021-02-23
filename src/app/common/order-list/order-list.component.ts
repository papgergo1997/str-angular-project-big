import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderProperties: string[] = Object.keys(new Order());
  orderList$: BehaviorSubject<Order[]> = this.orderService.orderList$;

  phrase: string = "";

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
    console.log(this.orderProperties);
  }

  removeOrder(order: Order) {
    this.orderService.remove(order);
  }

  onChangePhrase(event: Event) {
    this.phrase = (event.target as HTMLInputElement).value;
  }

}
