import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  productProperties: string[] = Object.keys(new Product());

  productList: BehaviorSubject<Product[]> = this.productService.list$;

  constructor(
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.productService.getAll();
  }

  onDelete(product: Product): void {
    this.productService.remove(product);
    this.showWarning();
    this.router.navigate(['products']);
  }

  showWarning() {
    this.toastr.warning('You have successfully deleted the product!', 'Deleted', { timeOut: 4000 })
  }

}
