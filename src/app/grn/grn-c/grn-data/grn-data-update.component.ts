import { Component, OnInit } from '@angular/core';
import {GrnDataService} from './grn-data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Grn } from './grn';
import {GrnRegisterService} from '../grn-register/grn-register.service';


@Component({
  selector: 'app-grn-dataupdate',
  templateUrl: './grn-data-update.component.html'
})
export class GrnDataUpdateComponent implements OnInit {

  constructor(private service: GrnDataService,
    private registerservice: GrnRegisterService,
    private router: Router,private route: ActivatedRoute,) { }

    id: number;
    grn: Grn;
    submitted = false;
    shipmentcode :any;
    vendor:any;
    poordercode :any;
  
  ngOnInit(): void {
    this.grn = new Grn();
      this.id = this.route.snapshot.params['id'];

    this.registerservice.getPOOrderCode().subscribe((posRes) => {
      this.poordercode = posRes;
     console.log(this.poordercode);
    }, (errRes: HttpErrorResponse) => {
      
      if (errRes.error instanceof Error)
        console.log("client side error");
      else
        console.log("server side error");
    });

    this.service.getOneGrn(this.id)
      .subscribe(data => {
        console.log(data)
        this.grn = data;
      }, error => console.log(error));
  }

  updateGrn() {
    console.log("in update");
    this.service.updateGrn(this.id, this.grn)
      .subscribe(data => {
        console.log(data);
        this.grn = new Grn();
      }, error => console.log(error));
    }
  
      onSubmit() {
        this.submitted = true;
        this.updateGrn();    
      }
}

