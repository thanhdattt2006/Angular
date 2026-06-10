import { Component } from "@angular/core";
import { DemoService } from "../service/demo.service";
import { CaculateService } from "../service/caculate.service";

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
  constructor(private demoService: DemoService, private caculateService: CaculateService) { }

  ngOnInit() {
    this.result1 = this.demoService.hello();
    this.result2 = this.demoService.hi("Dave");
    this.result3 = this.caculateService.add(1, 2);
    this.result4 = this.caculateService.sub(1, 2);
    this.result5 = this.caculateService.mul(1, 2);
    this.result6 = this.caculateService.div(1, 2);
  }
} 
