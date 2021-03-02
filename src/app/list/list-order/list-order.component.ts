import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/service/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit {

  orderProperties: string[] = Object.keys(new Order());
  orderList$: BehaviorSubject<Order[]> = this.orderService.orderList$;

  // szükséges változók a filter-hez:
  filterKey = 'id';
  phrase = '';

  // szükséges változók a sort-hoz:
  ascend = true;
  sortKey = '';

  // szükséges változók a paginator-hoz:
  indexPage = 1;
  pagiLength = 5;
  ArrayLength = 0;

  // szükséges változók az oszlopok változtatásához:
  lastDragKey = "";


  constructor(
    private orderService: OrderService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.orderService.getAll();
    this.orderList$.subscribe(data => { this.ArrayLength = data.length });
  }


  onLength(length: number) {
    this.pagiLength = length;
  }
  onIndex(length: number) {
    this.indexPage = length;
  }


  removeOrder(order: Order): void {
    this.orderService.remove(order);
    this.showRemove();
  }
  showRemove(): void {
    this.toastr.error('You have successfully deleted the order!', 'Deleted', { timeOut: 3000 });
  }


  onChangeSort(data: string): void {
    this.sortKey = data;
    this.ascend = !this.ascend;
  }


  onHeaderDragStart(event: DragEvent): void {
    this.lastDragKey = (event.target as HTMLTableHeaderCellElement).id;
  }
  onHeaderDrop(event: DragEvent): void {
    event.preventDefault();
    const targetID: string = (event.target as HTMLTableHeaderCellElement).id;
    const from = this.orderProperties.findIndex(prop => prop === this.lastDragKey);
    const to = this.orderProperties.findIndex(prop => prop === targetID);
    const temp = Object.assign({}, this.orderProperties[from]);
    this.orderProperties.splice(from, 1);
    this.orderProperties.splice(to, 0, temp);
  }

}
