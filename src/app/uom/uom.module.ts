import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UomCComponent } from './uom-c/uom-c.component';
import {UomRoutingModule} from './uom-routing.module';
import { UomRegisterComponent } from './uom-c/uom-register/uom-register.component';
import { UomDataComponent } from './uom-c/uom-data/uom-data.component';
import { UomUpdateComponent } from './uom-c/uom-data/uom-update.component';
import { FormsModule } from '@angular/forms';
import{UomViewComponent} from './uom-c/uom-data/uom-view.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HtppInterceptorService} from 'src/app/login/loginservice/htpp-interceptor.service';

 


@NgModule({
  declarations: [
    UomCComponent, 
    UomRegisterComponent,
     UomDataComponent,
     UomUpdateComponent,
     UomViewComponent
    ],


  imports: [CommonModule,UomRoutingModule,FormsModule],
  exports:[UomCComponent],
  providers:[UomCComponent],
})
export class UomModule { }
