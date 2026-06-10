import { Injectable } from "@angular/core";
import { Product } from "../entities/product.entity";

@Injectable({
  providedIn: 'root'
})

export class ProdcuctService {
  private products: Product[];
  constructor() {
    this.products = [
      new Product(2, "Dave2", "hi2", 3, 4, "Obito-img.jpg", true),
      new Product(3, "Dave3", "hi3", 3, 9, "CV.jpg", false),
      new Product(4, "Dave4", "hi4", 3, 2, "CV-img.jpg", true),
    ];
  }

  findById(id: number) {
    return this.products.find(p => p.id == id);
  }

  findAll() {
    return this.products;
  }
}
