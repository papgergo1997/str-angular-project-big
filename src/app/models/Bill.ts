export class Bill {

  constructor(public id: number, public orderID: number, public amount: number, public status: 'new' | 'paid') {

  }
}
