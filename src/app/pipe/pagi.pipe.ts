import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagi'
})
export class PagiPipe implements PipeTransform {

  pagesNumber: number[] = [];

  transform(value: any[], length: number): number[] {

    this.pagesNumber = [];

    if (!Array.isArray(value) || !length) {
      return [];
    }

    for (let i = 1; i <= Math.ceil(value.length / length); i++) {
      this.pagesNumber.push(i);
    }

    return this.pagesNumber;
  }

}
