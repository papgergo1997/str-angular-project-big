export class Bill {
  private id: number;
  private orderID: number;
  private amount: number;
  private status: 'new' | 'paid';

  constructor(id: number, orderID: number, amount: number, status: 'new' | 'paid') {
    this.id = id;
    this.orderID = orderID;
    this.amount = amount;
    this.status = status;
  }
}
