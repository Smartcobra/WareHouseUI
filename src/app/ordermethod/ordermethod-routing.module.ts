import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ OrdermethodCComponent } from './ordermethod-c/ordermethod-c.component';
 import { OrdermethodRegisterComponent } from './ordermethod-c/ordermethod-register/ordermethod-register.component';
import { OrdermethodDataComponent } from './ordermethod-c/ordermethod-data/ordermethod-data.component';
import { OrderMethodUpdateComponent } from './ordermethod-c/ordermethod-data/ordermethod-update.component';
import{OrderMethodViewComponent} from './ordermethod-c/ordermethod-data/ordermethod-view.component';
// import{PurchaseorderDtlsComponent} from './purchaseorder-c/purchaseorderdata/purchaseorder-dtls.component';


const routes: Routes = [ 
  {path:'',
     children:[
    {path:'',component:OrdermethodCComponent},
    {path:'register',component:OrdermethodRegisterComponent},
    {path:'data',component:OrdermethodDataComponent},
    {path:'data/update/:id',component:OrderMethodUpdateComponent},
    {path:'data/view/:id',component:OrderMethodViewComponent}
    //  {path:'data/part/:id',component:PurchaseorderDtlsComponent}
 ]
            }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderMethodRoutingModule { }
