import { Injectable } from "@angular/core";
import { CaculateService } from "./caculate.service";

@Injectable({
  providedIn: 'root'
})

export class RectangleService {

  constructor(private caculateService: CaculateService) { }

  area(a: number, b: number) {
    return this.caculateService.mul(a, b);
  }

  perimeter(a: number, b: number) {
    return this.caculateService.add(a, b) * 2;
  }
}
