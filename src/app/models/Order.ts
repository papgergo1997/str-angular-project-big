export class Order {
  private id: number;
  private customerID: number;
  private productID: number;
  private amount: number;
  private status: 'new' | 'shipped' | 'paid';

  constructor(id: number, customerID: number, productID: number, amount: number, status: 'new' | 'shipped' | 'paid') {
    this.id = id;
    this.customerID = customerID;
    this.productID = productID;
    this.amount = amount;
    this.status = status;
  }
}
