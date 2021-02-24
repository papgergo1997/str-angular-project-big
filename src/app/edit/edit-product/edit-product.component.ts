import { Component, OnInit } from '@angular/core';
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
    switchMap(params => this.productService.get(params.id))
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit( ): void { }

  onUpdate(product: Product): void {
    if (product.id === 0) {
      this.productService.create(product);
      this.router.navigate(['products']);
    } else {
      this.productService.update(product);
    }
  }
}
