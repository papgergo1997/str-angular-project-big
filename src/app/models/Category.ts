export class Category {
  private description: string;
  private name: string;
  private id: number;

  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }}
