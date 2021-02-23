export class Order {
  constructor(public id: number, public customerID: number, public productID: number, public amount: number,
              public status: 'new' | 'shipped' | 'paid') {
  }
}
