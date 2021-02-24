import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  apiUrl: string = 'http://localhost:3000/orders';
  orderList$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  constructor(private http: HttpClient) { }

  getAll(): void {
    this.http.get<Order[]>(this.apiUrl).subscribe(order => this.orderList$.next(order)
    );
  }

  get(id: number): Observable<Order> {
    id = parseInt(('' + id), 10);
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  create(order: Order): void {
    this.http.post<Order>(this.apiUrl, order).subscribe(
      () => this.getAll()
    );
  }

  update(order: Order): void {
    this.http.patch<Order>(`${this.apiUrl}/${order.id}`, order).subscribe(
      () => this.getAll()
    );
  }

  remove(order: Order): void {
    this.http.delete<Order>(`${this.apiUrl}/${order.id}`).subscribe(
      () => this.getAll()
    );
  }

}

