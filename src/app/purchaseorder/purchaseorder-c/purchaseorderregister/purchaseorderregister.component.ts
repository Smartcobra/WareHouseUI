import { Component, OnInit } from '@angular/core';
import{PurchaseOrder} from './purchaseorder';
import {PurchaseorderregisterService} from './purchaseorderregister.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-purchaseorderregister',
  templateUrl: './purchaseorderregister.component.html',
  styleUrls: ['./purchaseorderregister.component.scss']
})
export class PurchaseorderregisterComponent implements OnInit {
shipmentcode :any;
vendor:any;



  constructor(private service :PurchaseorderregisterService) { }

  purchaseorder:PurchaseOrder = new PurchaseOrder();
  submitted = false;

  newPurchaseOrder(): void {
    this.submitted = false;
    this.purchaseorder = new PurchaseOrder();
  }

  ngOnInit(): void {
    this.service.getShipmentcode().subscribe((posRes) => {
      this.shipmentcode = posRes;
     console.log(this.shipmentcode);
    }, (errRes: HttpErrorResponse) => {
      debugger;
      if (errRes.error instanceof Error)
        console.log("client side error");
      else
        console.log("server side error");
    });

    this.service.getWhuserType().subscribe((posRes) => {
      this.vendor = posRes;
     console.log(this.vendor);
    }, (errRes: HttpErrorResponse) => {
      debugger;
      if (errRes.error instanceof Error)
        console.log("client side error");
      else
        console.log("server side error");
    });
    this.purchaseorder.status='OPEN';
  }


  save() {
    console.log("hi i am here");
   this.service
    .createPurchaseOrderData(this.purchaseorder).subscribe(data => {
      console.log(data);
     // debugger;
      this.purchaseorder = new PurchaseOrder();
    }, 
    error => 
    console.log(error)); 
  }

  
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
