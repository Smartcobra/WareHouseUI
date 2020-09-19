import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderMethodRoutingModule } from './ordermethod-routing.module';
import { OrdermethodCComponent } from './ordermethod-c/ordermethod-c.component';
import { OrdermethodRegisterComponent } from './ordermethod-c/ordermethod-register/ordermethod-register.component';
import { OrdermethodDataComponent } from './ordermethod-c/ordermethod-data/ordermethod-data.component';
import {OrderMethodViewComponent} from './ordermethod-c/ordermethod-data/ordermethod-view.component';
import {OrderMethodUpdateComponent} from './ordermethod-c/ordermethod-data/ordermethod-update.component';

@NgModule({
  declarations: [OrdermethodCComponent, OrdermethodRegisterComponent,
     OrdermethodDataComponent,OrderMethodViewComponent,OrderMethodUpdateComponent],
  imports: [
    CommonModule,OrderMethodRoutingModule,FormsModule
  ],
  exports:[OrdermethodCComponent],
  providers:[OrdermethodCComponent]
})
export class OrdermethodModule { }
