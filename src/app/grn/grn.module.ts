import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrnCComponent } from './grn-c/grn-c.component';
import { GrnRoutingModule } from './grn-routing.module';
import { GrnRegisterComponent } from './grn-c/grn-register/grn-register.component';
import { GrnDataComponent } from './grn-c/grn-data/grn-data.component';
import { FormsModule } from '@angular/forms';
import { GrnDataUpdateComponent} from './grn-c/grn-data/grn-data-update.component';
import {GrnDataViewComponent} from './grn-c/grn-data/grn-data-view.component';
import {GrnDtlsViewComponent} from './grn-c/grn-data/grn-dtls-view.component';


@NgModule({
  declarations: [GrnCComponent, GrnRegisterComponent,
     GrnDataComponent,GrnDataUpdateComponent,
     GrnDataViewComponent,GrnDtlsViewComponent
    ],
  imports: [
    CommonModule,GrnRoutingModule,FormsModule
  ],
  exports:[GrnCComponent],
  providers:[GrnCComponent]
})
export class GrnModule { }

