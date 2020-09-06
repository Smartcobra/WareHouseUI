import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ShipmenttypeCComponent} from './shipmenttype-c/shipmenttype-c.component';
import { ShipmenttyperegisterComponent } from './shipmenttype-c/shipmenttyperegister/shipmenttyperegister.component';
import { ShipmenttypedataComponent } from './shipmenttype-c/shipmenttypedata/shipmenttypedata.component';
import { ShipmentTypeUpdateComponent } from './shipmenttype-c/shipmenttypedata/shipmenttype-update.component';
import {ShipmenttypeViewComponent} from './shipmenttype-c/shipmenttypedata/shipmenttype-view.component'
// import { UomUpdateComponent } from './uom-c/uom-data/uom-update.component';
// import{UomViewComponent} from './uom-c/uom-data/uom-view.component'



//const routes: Routes = [ {path:'',component:UomCComponent}]

const routes: Routes = [ 
  {path:'',
     children:[
      {path:'',component:ShipmenttypeCComponent},
       {path:'register',component:ShipmenttyperegisterComponent},
       {path:'data',component:ShipmenttypedataComponent},
      {path:'data/update/:id',component:ShipmentTypeUpdateComponent},
      {path:'data/view/:id',component:ShipmenttypeViewComponent}
]
            }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmenttypeRoutingModule { }
