import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product$: Observable<Product> = this.activatedRoute.params.pipe(
    switchMap( params => this.productService.get(params.id))
  );

  product: Product = new Product();

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit( ): void { }

  onUpdate(form: NgForm, product: Product): void {
    if (product.id !== 0) {
      this.productService.update(product);
      this.router.navigate(['products']);
    }
    this.productService.create(product);
    this.router.navigate(['products']);
  }

  // onUpdate(product: Product): void {
  //   if (product.id === 0) {
  //     this.productService.create(product);
  //     this.router.navigate(['products']);

  //   } else {
  //     this.productService.update(product);
  //   }
  // }
}
