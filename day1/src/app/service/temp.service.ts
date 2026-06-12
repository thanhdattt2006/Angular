import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class TempService {
  cToF(celsius: number): number {
    return (celsius * 9) / 5 + 32;
  }

  fToC(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
  }
}
