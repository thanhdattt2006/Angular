import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Cert } from "../entities/cert.entity";
import { CertService } from "../service/cert.service";

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
  cert: Cert;
  certs: Cert[];
  selectedCertId: number;

  constructor(private certService: CertService) { }

  ngOnInit() {
    this.name = 'A';
    this.size = 150;
    this.img = '';
    this.status = true;
    this.gender = 'Male';
    this.cert = this.certService.findById(2);
    this.certs = this.certService.findAll();
    this.selectedCertId = 1;
  }

  get selectedCert(): Cert | undefined {
    return this.certs.find(c => c.id == this.selectedCertId);
  }
}
