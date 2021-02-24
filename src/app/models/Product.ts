export class Product {
  type: string = "";
  featured: boolean = false;
  name: string = "";
  active: boolean = false;
  id: number = 0;
  catID: number = 0;
  description: string = "";
  price: number = 0;

  // constructor(id: number, name: string, type: string, catID: number, description: string, price: number,
  //             active: boolean, featured: boolean) {
  //   this.featured = featured;
  //   this.active = active;
  //   this.id = id;
  //   this.name = name;
  //   this.type = type;
  //   this.catID = catID;
  //   this.description = description;
  //   this.price = price;
  // }

  constructor(properties?: Product) {
    if (properties) {
      this.id = properties.id || 0;
      this.name = properties.name || "";
      this.type = properties.type || "";
      this.catID = properties.catID || 0;
      this.description = properties.description || "";
      this.price = properties.price || 0;
      this.active = properties.active || false;
      this.featured = properties.featured || false;
    }
  }
}
