export class Product {
  constructor(public id: number, public name: string, public type: string,
              public catID: number, public description: string, public price: number,
              public active: boolean, public featured: boolean) {
  }
}
