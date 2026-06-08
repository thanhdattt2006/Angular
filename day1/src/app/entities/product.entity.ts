export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  photo: string;
  status: boolean;

  constructor(id: number, name: string, description: string, price: number, quantity: number, photo: string, status: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.photo = photo;
    this.status = status;
  }
}
