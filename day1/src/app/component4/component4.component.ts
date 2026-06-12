import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './component4.component.html'
})

export class Component4Component implements OnInit {
  bgColor: string = '#f8fafc'; // Default background color
  showAlert: boolean = false;
  alertMessage: string = '';

  constructor() { }

  ngOnInit() {
  }

  clickMe() {
    this.triggerAlert("Bạn đã kích hoạt thành công sự kiện click!");
  }

  triggerAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }

  closeAlert() {
    this.showAlert = false;
  }

  ChangeBg(event: Event) {
    const target = event.target as HTMLButtonElement;
    if (target && target.value) {
      this.bgColor = target.value;
    }
  }

  imgWidth: number = 100;
  imgHeight: number = 100;
  selectedImg: string = 'Obito-img.jpg';

  ChangeSize(event: Event) {
    const target = event.target as HTMLButtonElement;
    if (target && target.value) {
      const parts = target.value.split('x');
      if (parts.length === 2) {
        this.imgWidth = parseInt(parts[0], 10);
        this.imgHeight = parseInt(parts[1], 10);
      }
    }
  }
}
