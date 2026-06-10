import { Injectable } from "@angular/core";
import { Cert } from "../entities/cert.entity";

@Injectable({
  providedIn: "root"
})
export class CertService {
  private certs: Cert[];

  constructor() {
    this.certs = [
      new Cert(1, 'Python', 'Python is a high-level, interpreted programming language', 'IT'),
      new Cert(2, 'C#', 'C# is a high-level, object-oriented programming language', 'IT'),
      new Cert(3, 'Java', 'Java is a high-level, object-oriented programming language', 'IT'),
    ];
  }

  findAll() {
    return this.certs;
  }

  findById(id: number) {
    return this.certs.find(c => c.id == id)
  }
}
