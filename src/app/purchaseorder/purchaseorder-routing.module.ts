import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ PurchaseorderCComponent } from './purchaseorder-c/purchaseorder-c.component';
import { PurchaseorderregisterComponent } from './purchaseorder-c/purchaseorderregister/purchaseorderregister.component';
import { PurchaseorderdataComponent } from './purchaseorder-c/purchaseorderdata/purchaseorderdata.component';
import { PurchaseorderUpdateComponent } from './purchaseorder-c/purchaseorderdata/purchaseorder-update.component';
import{PurchaseorderViewComponent} from './purchaseorder-c/purchaseorderdata/purchaseorder-view.component';
import{PurchaseorderDtlsComponent} from './purchaseorder-c/purchaseorderdata/purchaseorder-dtls.component';



//const routes: Routes = [ {path:'',component:UomCComponent}]

const routes: Routes = [ 
  {path:'',
     children:[
    {path:'',component:PurchaseorderCComponent},
    {path:'register',component:PurchaseorderregisterComponent},
     {path:'data',component:PurchaseorderdataComponent},
     {path:'data/update/:id',component:PurchaseorderUpdateComponent},
     {path:'data/view/:id',component:PurchaseorderViewComponent},
     {path:'data/part/:id',component:PurchaseorderDtlsComponent}
 ]
            }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule { }
