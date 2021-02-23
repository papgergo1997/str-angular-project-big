export class Product {
  type: string;
  featured: boolean;
  name: string;
  active: boolean;
  id: number;
  catID: number;
  description: string;
  price: number;

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
