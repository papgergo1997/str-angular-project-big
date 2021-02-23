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
