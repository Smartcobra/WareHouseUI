import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UomCComponent } from './uom-c/uom-c.component';
import {UomRoutingModule} from './uom-routing.module';
import { UomRegisterComponent } from './uom-c/uom-register/uom-register.component';
import { UomDataComponent } from './uom-c/uom-data/uom-data.component';
import { FormsModule } from '@angular/forms';

 


@NgModule({
  declarations: [UomCComponent, UomRegisterComponent, UomDataComponent],
  imports: [CommonModule,UomRoutingModule,FormsModule],
  exports:[UomCComponent],
  providers:[UomCComponent],
})
export class UomModule { }
