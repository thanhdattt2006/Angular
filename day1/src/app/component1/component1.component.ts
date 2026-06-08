import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css', './component2.component.css']
})

export class Component1Component implements OnInit {

  constructor() { }

  id: number = 1;
  username: string;
  status: boolean;
  phone: any;
  quantity: number;
  price: number;
  total: number;
  photo: string;
  height: number;

  ngOnInit() {
    this.username = "Dave"
    this.status = true;
    this.quantity = 10;
    this.price = 8;
    this.total = this.quantity * this.price;
    this.photo = "CV.jpg";
    this.height = 100;
  }
}
