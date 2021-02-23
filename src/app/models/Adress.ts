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
