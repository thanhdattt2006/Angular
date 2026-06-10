import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DemoService {
  hello() {
    return 'Hello World';
  }

  hi(name: string) {
    return "Hi " + name;
  }
}
