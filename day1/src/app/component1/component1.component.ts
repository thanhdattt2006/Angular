import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './component1.component.html'
})

export class Component1Component implements OnInit {

  constructor() { }

  id: number = 123;
  username: string;
  status: boolean;
  phone: any;

  ngOnInit() {
    this.username = "Dave"
    this.status = true;
  }
}
