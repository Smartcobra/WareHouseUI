import { Component, OnInit } from '@angular/core';
import {PurchaseorderdataService} from './purchaseorderdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {PurchaseOrders} from './purchasedorders';
import {PurchaseorderregisterService} from '../purchaseorderregister/purchaseorderregister.service';
import { PurchaseOrderDtls } from './purchaseorderdtls';

@Component({
  selector: 'app-purchaseorder-dtls',
  templateUrl: './purchaseorder-dtls.component.html',
  styleUrls: ['./purchaseorderdata.component.scss']
})
export class PurchaseorderDtlsComponent implements OnInit {

  constructor(private service: PurchaseorderdataService ,
    private router: Router,private route: ActivatedRoute,
    private registerservice:PurchaseorderregisterService) { }
    public result: any;

    
  
    id: number;
    purchaseorders: PurchaseOrders;
    purchaseOrderDtls: PurchaseOrderDtls;
    submitted = false;
    partcode:any;
    purchaseorderDtlsList:any;
    
    ngOnInit() {
      this.purchaseorders = new PurchaseOrders();
      this.purchaseOrderDtls = new PurchaseOrderDtls();
      this.id = this.route.snapshot.params['id'];
             console.log('ID IS:: ' + this.id);
       
             this.getPurchaseOrders(this.id);

        this.service.getPartCode().subscribe((posRes) => {
          this.partcode = posRes;
         console.log(this.partcode);
        }, (errRes: HttpErrorResponse) => {
          debugger;
          if (errRes.error instanceof Error)
            console.log("client side error");
          else
            console.log("server side error");
        });

        this.getPurchaseOrderList();
      }
 
  
        ///purchase orders
        getPurchaseOrders(id:number){
          this.purchaseorders = new PurchaseOrders();
          console.log("i am called")
        this.service.getPurchaseOrders(id)
        .subscribe(data => {
          console.log(data)
          this.purchaseorders = data;
        },
         error => console.log(error));
        }
    /////purchaseorder list
       getPurchaseOrderList(){
      this.service.getPurchaseOrderDtlsList(this.id).subscribe((posRes) => {
        this.purchaseorderDtlsList = posRes;
       console.log(this.partcode);
      }, (errRes: HttpErrorResponse) => {
        if (errRes.error instanceof Error)
          console.log("client side error");
        else
          console.log("server side error");
      });
    }

    savePurchaseDtls() {
      this.purchaseOrderDtls.po=this.purchaseorders;
     this.service
      .createPurchaseOrderDtlsData(this.purchaseOrderDtls).subscribe(data => {
        console.log(data);
        this.purchaseOrderDtls = new PurchaseOrderDtls();
      }, 
      error => 
      console.log(error)); 
    }
  
  
    onSubmit() {
      this.savePurchaseDtls();  
      this.getPurchaseOrderList();
      console.log("calling ------------$$")
      this.getPurchaseOrders(this.id);
      console.log("calling ------------$$")
    }

    deletePurchaseDtls(id: number) {
      this.service.deletepurchasedtls(id)
        .subscribe(
          data => {
            console.log(data);
          },  
          (errRes:HttpErrorResponse)=>{
            if(errRes.error instanceof Error)
                console.log("client side error");
            else
                console.log("server side error");
        });
        this.getPurchaseOrderList();
        this.getPurchaseOrders(this.id);
        }

        confirmPoOrder(id: number) {
          this.service.confirmPO(id)
            .subscribe(
              data => {
                console.log(data);
              },  
              (errRes:HttpErrorResponse)=>{
                if(errRes.error instanceof Error)
                    console.log("client side error");
                else
                    console.log("server side error");
            });
            this.getPurchaseOrders(this.id);
            }
  }