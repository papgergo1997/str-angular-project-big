export class Product {
  id: number = 0;
  KatID: number = 0;
  name: string = "";
  type: string = "";
  description: string = "";
  price: number = 0;
  featured: boolean = false;
  active: boolean = false;  

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
      this.KatID = properties.KatID || 0;
      this.description = properties.description || "";
      this.price = properties.price || 0;
      this.active = properties.active || false;
      this.featured = properties.featured || false;
    }
  }
}
