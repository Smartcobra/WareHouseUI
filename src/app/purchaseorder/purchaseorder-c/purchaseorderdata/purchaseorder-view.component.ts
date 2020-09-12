import { Component, OnInit } from '@angular/core';
import {PurchaseorderdataService} from './purchaseorderdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {PurchaseOrder} from './purchaseorder';
import {PurchaseorderregisterService} from '../purchaseorderregister/purchaseorderregister.service';


@Component({
  selector: 'app-purchaseorder-view',
  templateUrl: './purchaseorder-view.component.html',
})
export class PurchaseorderViewComponent implements OnInit {

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
    this.service.getOnePurchaseOrder(this.id)
      .subscribe(data => {
        console.log(data)
        this.purchaseorder = data;
      }, error => console.log(error));

  }
   
}
   
    
    
  