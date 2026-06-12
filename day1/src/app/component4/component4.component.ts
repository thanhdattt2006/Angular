import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TempService } from "../service/temp.service";

@Component({
  selector: 'app-root',
  templateUrl: './component4.component.html',
  imports: [FormsModule]
})

export class Component4Component implements OnInit {
  bgColor: string = '#f8fafc'; // Default background color
  showAlert: boolean = false;
  alertMessage: string = '';

  // Temperature Converter
  tempInput: number = 0;
  tempResult: number = 32;
  tempType: 'C_TO_F' | 'F_TO_C' = 'C_TO_F';

  constructor(private tempService: TempService) { }

  ngOnInit() {
    this.convertTemp();
    this.calculateGrade();
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

  selectImage(img: string) {
    this.selectedImg = img;
  }

  convertTemp() {
    const rawResult = this.tempType === 'C_TO_F'
      ? this.tempService.cToF(this.tempInput)
      : this.tempService.fToC(this.tempInput);
    this.tempResult = Math.round(rawResult * 100) / 100;
  }

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

  // Grade Calculator
  mathScore: number = 0;
  physicsScore: number = 0;
  chemistryScore: number = 0;
  averageScore: number = 0;
  gradeClassification: string = 'Yêu';

  calculateGrade() {
    this.mathScore = this.clampScore(this.mathScore);
    this.physicsScore = this.clampScore(this.physicsScore);
    this.chemistryScore = this.clampScore(this.chemistryScore);

    const avg = (this.mathScore + this.physicsScore + this.chemistryScore) / 3;
    this.averageScore = Math.round(avg * 100) / 100;

    if (this.averageScore >= 8) {
      this.gradeClassification = 'Giỏi';
    } else if (this.averageScore >= 6.5) {
      this.gradeClassification = 'Khá';
    } else if (this.averageScore >= 5) {
      this.gradeClassification = 'Trung bình';
    } else {
      this.gradeClassification = 'Yếu';
    }
  }

  private clampScore(score: number): number {
    if (score === null || score === undefined || isNaN(score)) return 0;
    if (score < 0) return 0;
    if (score > 10) return 10;
    return score;
  }
}
