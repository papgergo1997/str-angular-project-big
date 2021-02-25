import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { Order} from '../../models/Order';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderService} from '../../service/order.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  order$: Observable<Order> = this.activatedRoute.params.pipe(
    switchMap(params => this.orderService.get(params.id))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
  }

  onUpdate(order: Order): void {
    if (order.id === 0) {
      this.orderService.create(order);
      this.router.navigate(['orders']);
      this.showSuccess();
    } else {
      this.orderService.update(order);
      this.showInfo();
    }
  }

  showSuccess() {
    this.toastr.success('Sikeresen hozzáadtad az eseményt!', 'Üzenet', {timeOut: 3000});
  }

  showInfo() {
    this.toastr.info('Sikeresen módosítottad az eseményt!', 'Üzenet', {timeOut: 3000});
  }
}
