import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartCComponent } from './part-c/part-c.component';
import { FormsModule } from '@angular/forms';
import {PartRoutingModule} from './part-routing.module';
import { PartRegisterComponent } from './part-c/part-register/part-register.component';
import { PartDataComponent } from './part-c/part-data/part-data.component';
import {PartDataUpdateComponent} from './part-c/part-data/part-data-update.component';
import {PartDataViewComponent} from './part-c/part-data/part-data-view.component';



@NgModule({
  declarations: [PartCComponent, PartRegisterComponent, 
    PartDataComponent,PartDataUpdateComponent,PartDataViewComponent],
  imports: [
    CommonModule,FormsModule,PartRoutingModule
  ],
  exports:[PartCComponent],
  providers:[PartCComponent],
})
export class PartModule { }
