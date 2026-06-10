import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CaculateService {
  add(a: number, b: number) {
    return a + b;
  }

  sub(a: number, b: number) {
    return a - b;
  }

  mul(a: number, b: number) {
    return a * b;
  }

  div(a: number, b: number) {
    return a / b;
  }
}
