import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product';

@Pipe({
  name: 'featured'
})
export class FeaturedPipe implements PipeTransform {

  transform(productList$: Product[], featured: boolean): Product[] {
    if (!Array.isArray(productList$) || !featured) {
      return productList$
    }
    return productList$.filter(item => featured === item.featured)
  }

}