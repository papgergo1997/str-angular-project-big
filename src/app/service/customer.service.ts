import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList$: Observable<Customer[]>;
  apiUrl: string = 'http://localhost:3000/customers';

  constructor(private http: HttpClient) {
    this.customerList$ = this.getAll();
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  get(id: number): Observable<Customer> {
    id = typeof id === 'string' ? parseInt(id, 10) : id;
    const ev: Observable<Customer> | undefined = this.http.get<Customer>(`${this.apiUrl}/${id}`);
    if (id == 0) {
      return of(new Customer());
    } else
      return ev;
  }

  create(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  update(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.apiUrl}/${customer.id}`, customer);
  }

  remove(customer: Customer): Observable<Customer> {
    console.log(customer);
    return this.http.delete<Customer>(`${this.apiUrl}/${customer.id}`);
  }

}
