import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[] | null, key: string, phrase: string | number | boolean, aFilterKey?: string | number): any[] | null {
    if (!Array.isArray(value) || !key || !phrase) {
      return value;
    }

    phrase = typeof phrase !== 'number' ? ('' + phrase).toLowerCase() : phrase;

    return value.filter(item => {
      if (typeof item[key] === 'number' && typeof phrase === 'number') {
        return item[key] === phrase;
      } else if (aFilterKey) {
        return item[key][aFilterKey] === phrase;
      }
      return ('' + item[key]).toLowerCase().includes((phrase as string));
    });
  }

}
