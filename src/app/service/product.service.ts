import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'http://localhost:3000/products';

  list$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) { }

  getAll(): void {
    this.http.get<Product[]>(this.apiUrl).subscribe(
      product => this.list$.next(product)
    );
  }

  get(id: number | string): Observable<Product> {
    id = parseInt(('' + id), 10);
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  update(product: Product): void {
    this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product).subscribe(
      () => this.getAll()
    );
  }
  
  remove(product: Product): void {
    this.http.delete<Product>(`${this.apiUrl}/${product.id}`).subscribe(
      () => this.getAll()
    );
  }

  create(product: Product): void {
    this.http.post<Product>(this.apiUrl, product).subscribe(
      () => this.getAll()
    );
  }

  randomize(sourceArray: any[]): any[] {
    return sourceArray.sort( () => Math.random() - 0.5);
  }

}


