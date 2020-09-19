import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ PartCComponent } from './part-c/part-c.component';
import { PartRegisterComponent } from './part-c/part-register/part-register.component';
import { PartDataComponent } from './part-c/part-data/part-data.component';
import { PartDataUpdateComponent } from './part-c/part-data/part-data-update.component';
import{PartDataViewComponent} from './part-c/part-data/part-data-view.component';
// import{PurchaseorderDtlsComponent} from './purchaseorder-c/purchaseorderdata/purchaseorder-dtls.component';



//const routes: Routes = [ {path:'',component:UomCComponent}]

const routes: Routes = [ 
  {path:'',
     children:[
     {path:'',component:PartCComponent},
    {path:'register',component:PartRegisterComponent},
    {path:'data',component:PartDataComponent},
    {path:'data/update/:id',component:PartDataUpdateComponent},
    {path:'data/view/:id',component:PartDataViewComponent}
    //  {path:'data/part/:id',component:PurchaseorderDtlsComponent}
 ]
            }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class PartRoutingModule { }
