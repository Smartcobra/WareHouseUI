import { Component, OnInit } from '@angular/core';
import{UomRegisterService} from './uom-register.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Uom} from './uom-model'



@Component({
  selector: 'app-uom-register',
  templateUrl: './uom-register.component.html',
  styleUrls: ['./uom-register.component.scss']
})

export class UomRegisterComponent implements OnInit {
  
  uom:Uom = new Uom();
  submitted = false;

  constructor(private service:UomRegisterService) { }

  ngOnInit(){}

   newUom(): void {
    this.submitted = false;
    this.uom = new Uom();
  }
  save() {
    console.log("hi i am here");
    console.log("fromm uom"+this.uom.description);
    this.service
    .createUomData(this.uom).subscribe(data => {
      console.log(data);
      debugger;
      this.uom = new Uom();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
