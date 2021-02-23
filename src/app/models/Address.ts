export class Address {
  private zip: string;
  private country: string;
  private city: string;
  private street: string;
  private notes: string;

  constructor(zip: string, country: string, city: string, street: string, notes: string) {
    this.country = country;
    this.city = city;
    this.street = street;
    this.notes = notes;
    this.zip = zip;
  }
}
