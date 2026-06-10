import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './component3.component.html',
  imports: [FormsModule]
})

export class Component3Component implements OnInit {
  name: string;
  size: number;
  img: string;
  status: boolean;
  gender: string;

  ngOnInit() {
    this.name = 'A';
    this.size = 150;
    this.img = '';
    this.status = true;
    this.gender = 'Male';
  }
}
