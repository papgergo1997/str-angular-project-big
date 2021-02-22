export class Category {
  private description: string;
  private name: string;
  private id: number;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}

export class Product {
  private type: string;
  private featured: boolean;
  private name: string;
  private active: boolean;
  private id: number;
  private catID: number;
  private description: string;
  private price: number;

  constructor(id: number, name: string, type: string, catID: number, description: string, price: number,
              active: boolean, featured: boolean) {
    this.featured = featured;
    this.active = active;
    this.id = id;
    this.name = name;
    this.type = type;
    this.catID = catID;
    this.description = description;
    this.price = price;
  }
}

export class Address {
  private zip: number;
  private country: string;
  private city: string;
  private street: string;
  private notes: string;

  constructor(zip: number, country: string, city: string, street: string, notes: string) {
    this.country = country;
    this.city = city;
    this.street = street;
    this.notes = notes;
    this.zip = zip;
  }
}

export class Order {
  private id: number;
  private custromerID: number;
  private productID: number;
  private amount: number;
  private status: 'new' | 'shipped' | 'paid';

  constructor(id: number, custromerID: number, productID: number, amount: number, status: 'new' | 'shipped' | 'paid') {
    this.id = id;
    this.custromerID = custromerID;
    this.productID = productID;
    this.amount = amount;
    this.status = status;
  }
}

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

