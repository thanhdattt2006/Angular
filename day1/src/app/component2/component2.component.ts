import { Component } from "@angular/core";
import { DemoService } from "../service/demo.service";
import { CaculateService } from "../service/caculate.service";
import { RectangleService } from "../service/rectangle.service";
import { Product } from "../entities/product.entity";
import { ProdcuctService } from "../service/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './component2.component.html',
  // styleUrls: ['./component2.component.css']
})

export class Component2Component {
  result1: string;
  result2: string;
  result3: number;
  result4: number;
  result5: number;
  result6: number;
  result7: number;
  result8: number;
  result9: Product;
  result10: Product[];

  constructor(private demoService: DemoService
    , private caculateService: CaculateService
    , private rectangleService: RectangleService
    , private productService: ProdcuctService) { }

  ngOnInit() {
    this.result1 = this.demoService.hello();
    this.result2 = this.demoService.hi("Dave");
    this.result3 = this.caculateService.add(1, 2);
    this.result4 = this.caculateService.sub(1, 2);
    this.result5 = this.caculateService.mul(1, 2);
    this.result6 = this.caculateService.div(1, 2);
    this.result7 = this.rectangleService.area(2, 3);
    this.result8 = this.rectangleService.perimeter(2, 3);
    this.result9 = this.productService.findById(3);
    this.result10 = this.productService.findAll();
  }
} 
