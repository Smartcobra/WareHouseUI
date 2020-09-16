import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrnCComponent } from './grn-c/grn-c.component';
import { GrnDataComponent } from './grn-c/grn-data/grn-data.component';
import { GrnRegisterComponent } from './grn-c/grn-register/grn-register.component';
 import{ GrnDataUpdateComponent } from './grn-c/grn-data/grn-data-update.component';
import { GrnDataViewComponent } from './grn-c/grn-data/grn-data-view.component';
import { GrnDtlsViewComponent } from './grn-c/grn-data/grn-dtls-view.component';
// import { PurchaseorderUpdateComponent } from './purchaseorder-c/purchaseorderdata/purchaseorder-update.component';
// import{PurchaseorderViewComponent} from './purchaseorder-c/purchaseorderdata/purchaseorder-view.component';
// import{PurchaseorderDtlsComponent} from './purchaseorder-c/purchaseorderdata/purchaseorder-dtls.component';



//const routes: Routes = [ {path:'',component:UomCComponent}]

const routes: Routes = [ 
  {path:'',
     children:[
   {path:'',component:GrnCComponent},
    {path:'register',component:GrnRegisterComponent},
    {path:'data',component:GrnDataComponent},
    {path:'data/update/:id',component:GrnDataUpdateComponent},
    {path:'data/view/:id',component:GrnDataViewComponent},
    {path:'data/part/:id',component:GrnDtlsViewComponent}
  ]
            }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrnRoutingModule { }
