import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  transform(value: any[] | null, key: string, direction: boolean, zip?: string): any[] | null {

    if (!Array.isArray(value) || !key)
      return value;

    if (!direction) {
      return value.sort(function (a, b) {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {

          return a[key] - b[key];
        } else if (zip) {
          return a[key][zip].toString().toLowerCase().localeCompare(b[key][zip].toString().toLowerCase());
        } else {
          return a[key].toString().toLowerCase().localeCompare(b[key].toString().toLowerCase());
        }
      })
    } else {
      return value.sort(function (a, b) {
        if (typeof a[key] === 'number' && typeof b[key] === 'number') {

          return b[key] - a[key];
        } else if (zip) {
          return b[key][zip].toString().toLowerCase().localeCompare(a[key][zip].toString().toLowerCase());
        } else {
          return b[key].toString().toLowerCase().localeCompare(a[key].toString().toLowerCase());
        }
      })
    }

  }

}
