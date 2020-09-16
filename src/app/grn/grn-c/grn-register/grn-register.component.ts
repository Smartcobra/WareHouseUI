import { Component, OnInit } from '@angular/core';
import {GrnRegisterService} from './grn-register.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Grn} from './grn';

@Component({
  selector: 'app-grn-register',
  templateUrl: './grn-register.component.html',
  styleUrls: ['./grn-register.component.scss']
})
export class GrnRegisterComponent implements OnInit {
  poordercode :any;

  constructor(private service :GrnRegisterService) { }

  grn:Grn = new Grn();
  submitted = false;

  newGrn(): void {
    this.submitted = false;
    this.grn = new Grn();
  }

  ngOnInit(): void {
    this.service.getPOOrderCode().subscribe((posRes) => {
      this.poordercode = posRes;
     console.log(this.poordercode);
    }, (errRes: HttpErrorResponse) => {
      debugger;
      if (errRes.error instanceof Error)
        console.log("client side error");
      else
        console.log("server side error");
    });
  }


  save() {
    console.log("hi i am in grn");
   this.service
    .createGrn(this.grn).subscribe(data => {
      console.log(data);
     // debugger;
      this.grn = new Grn();
    }, 
    error => 
    console.log(error)); 
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
