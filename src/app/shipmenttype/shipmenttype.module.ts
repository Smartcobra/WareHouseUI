import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShipmenttypeCComponent } from './shipmenttype-c/shipmenttype-c.component';
import {ShipmenttypeRoutingModule} from './shipmenttype-routing.module';
import { ShipmenttyperegisterComponent } from './shipmenttype-c/shipmenttyperegister/shipmenttyperegister.component';
import { ShipmenttypedataComponent } from './shipmenttype-c/shipmenttypedata/shipmenttypedata.component';
import {ShipmentTypeUpdateComponent} from './shipmenttype-c/shipmenttypedata/shipmenttype-update.component';
import {ShipmenttypeViewComponent} from './shipmenttype-c/shipmenttypedata/shipmenttype-view.component'


@NgModule({
  declarations: [ShipmenttypeCComponent,
     ShipmenttyperegisterComponent, 
     ShipmenttypedataComponent,
     ShipmentTypeUpdateComponent,
     ShipmenttypeViewComponent],
  imports: [
    CommonModule,ShipmenttypeRoutingModule,FormsModule
  ],
  exports:[ShipmenttypeCComponent,ShipmentTypeUpdateComponent,ShipmenttypeViewComponent],
  providers:[ShipmenttypeCComponent]
})
export class ShipmenttypeModule { }
