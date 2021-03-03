import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any[] | null, key: string): number | any {
    // value-ként átadjuk neki az adott entitás listáját, tömb formában
    // key-ként meg kell adnunk string-ként, hogy az entitás melyik adatát akarjuk összesíteni
    // CSAK SZÁMOKRA MŰKÖDIK!

    // adatok ellenőrzése:
    if(!Array.isArray(value) || !key) {
      return value;
    }

    // ebben a tömbben fogjuk tárolni azokat az adatokat, amelyeket össze akarunk majd adni:
    const sumArr: number[] = [];

    // a kapott listának az elemein végigmegyünk, és a sumArr-be beletesszük az entitás keresett adatát
    // item: maga egy entitás
    value.forEach( item => {
      sumArr.push(item[key]);
    })
    // a sumArr elemeit összeadjuk, és visszatérünk a végösszeggel
    return sumArr.reduce( (accum, curr) => accum + curr );


    // HASZNÁLATA:
    // <td class="sumCell"> {{ orderList$ | async | summary:'amount'}} </td>
    // 1. Interpolációval megjelenítjük a teljes listát.
    // 2. Majd erre rátesszük a summary pipe-ot.
    // 3. String-ként átadjuk neki, hogy a listából az entitás melyik adatát akarjuk összesíteni.
  }

}
