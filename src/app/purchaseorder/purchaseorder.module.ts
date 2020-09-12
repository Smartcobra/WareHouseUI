import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseorderCComponent } from './purchaseorder-c/purchaseorder-c.component';
import { PurchaseOrderRoutingModule } from './purchaseorder-routing.module';
import { FormsModule } from '@angular/forms';
import { PurchaseorderregisterComponent } from './purchaseorder-c/purchaseorderregister/purchaseorderregister.component';
import { PurchaseorderdataComponent } from './purchaseorder-c/purchaseorderdata/purchaseorderdata.component';
import { PurchaseorderUpdateComponent} from './purchaseorder-c/purchaseorderdata/purchaseorder-update.component'
import {PurchaseorderViewComponent} from './purchaseorder-c/purchaseorderdata/purchaseorder-view.component';
import {PurchaseorderDtlsComponent} from './purchaseorder-c/purchaseorderdata/purchaseorder-dtls.component';

@NgModule({
  declarations: [PurchaseorderCComponent,
     PurchaseorderregisterComponent, 
     PurchaseorderdataComponent,
     PurchaseorderUpdateComponent,
     PurchaseorderViewComponent,
     PurchaseorderDtlsComponent],
  imports: [
    CommonModule,FormsModule,PurchaseOrderRoutingModule
  ],
  exports:[PurchaseorderCComponent],
providers:[PurchaseorderCComponent]
})
export class PurchaseorderModule { }
