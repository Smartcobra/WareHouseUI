import { Component, OnInit } from '@angular/core';
import {PurchaseorderdataService} from './purchaseorderdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {PurchaseOrder} from './purchaseorder';
import {PurchaseorderregisterService} from '../purchaseorderregister/purchaseorderregister.service';


@Component({
  selector: 'app-purchaseorder-update',
  templateUrl: './purchaseorder-update.component.html',
  styleUrls: ['./purchaseorderdata.component.scss']
})
export class PurchaseorderUpdateComponent implements OnInit {

  constructor(private service: PurchaseorderdataService ,
    private router: Router,private route: ActivatedRoute,
    private registerservice:PurchaseorderregisterService) { }
    public result: any;

    
  
    id: number;
    purchaseorder: PurchaseOrder;
    submitted = false;
    shipmentcode :any;
    vendor:any;
    
    ngOnInit() {
      this.purchaseorder = new PurchaseOrder();
      this.id = this.route.snapshot.params['id'];
      
             console.log('from update component');
      this.service.getShipmentType(this.id)
        .subscribe(data => {
          console.log(data)
          this.purchaseorder = data;
        }, error => console.log(error));

        this.registerservice.getShipmentcode().subscribe((posRes) => {
          this.shipmentcode = posRes;
         console.log(this.shipmentcode);
        }, (errRes: HttpErrorResponse) => {
          debugger;
          if (errRes.error instanceof Error)
            console.log("client side error");
          else
            console.log("server side error");
        });
    
        this.registerservice.getWhuserType().subscribe((posRes) => {
          this.vendor = posRes;
         console.log(this.vendor);
        }, (errRes: HttpErrorResponse) => {
          debugger;
          if (errRes.error instanceof Error)
            console.log("client side error");
          else
            console.log("server side error");
        });
        this.purchaseorder.status='open';
    }
  
    updatePurchaseorder() {
      console.log("in update");
      this.service.updatePurchaseOrder(this.id, this.purchaseorder)
        .subscribe(data => {
          console.log(data);
          this.purchaseorder = new PurchaseOrder();
        }, error => console.log(error));
  
    }
   
    onSubmit() {
      this.submitted = true;
      this.updatePurchaseorder();    
    }
    
  }