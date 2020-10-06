import { Component, OnInit } from '@angular/core';
import { UomRegisterService } from './uom-register.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Uom } from './uom-model'

import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-uom-register',
  templateUrl: './uom-register.component.html',
  styleUrls: ['./uom-register.component.scss']
})

export class UomRegisterComponent implements OnInit {

  errorStatus: string;
  failmessage: any;
  uom: Uom = new Uom();
  submitted = false;

  constructor(private service: UomRegisterService) { }

  ngOnInit() { }

  newUom(): void {
    this.submitted = false;
    this.uom = new Uom();
  }
  save() {
    this.service
      .createUomData(this.uom).subscribe(data => {
        console.log(data);
        this.uom = new Uom();
      }, error => {
        console.log(">>>>>><save<<<<" + error)
        this.errorStatus = error.substring(12, 15);
        if (+this.errorStatus === 200) {
          console.log("error Status is 200")
          this.submitted = true;
          this.uom = new Uom();
        } else {
          this.submitted = false;
          window.alert("Some Error Occured");

        }

      }
      )
  }

  onSubmit() {
    this.save();
  }
}