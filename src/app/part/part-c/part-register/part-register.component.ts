import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {PartRegisterService} from './part-register.service';
import {Part} from './part';

@Component({
  selector: 'app-part-register',
  templateUrl: './part-register.component.html',
  styleUrls: ['./part-register.component.scss']
})
export class PartRegisterComponent implements OnInit {

  uom :any;

  constructor(private service :PartRegisterService) { }

  part:Part = new Part();
  submitted = false;

  newPurchaseOrder(): void {
    this.submitted = false;
    this.part = new Part();
  }

  ngOnInit(): void {
    this.service.getUOM().subscribe((posRes) => {
      this.uom = posRes;
     console.log(this.uom);
    }, (errRes: HttpErrorResponse) => {
      debugger;
      if (errRes.error instanceof Error)
        console.log("client side error");
      else
        console.log("server side error");
    });
  }

  save() {
    console.log("hi i am here");
   this.service
    .createPartData(this.part).subscribe(data => {
      console.log(data);
      this.part = new Part();
    }, 
    error => 
    console.log(error)); 
  }

  
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}
