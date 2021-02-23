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


}
