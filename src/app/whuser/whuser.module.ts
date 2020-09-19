import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhuserCComponent } from './whuser-c/whuser-c.component';
import { FormsModule } from '@angular/forms';
import { WhUserRoutingModule } from './whuser-routing.module';
import { WhuserDataComponent } from './whuser-c/whuser-data/whuser-data.component';
import { WhuserRegisterComponent } from './whuser-c/whuser-register/whuser-register.component';
import { WhuserDataUpdateComponent } from './whuser-c/whuser-data/whuser-data-update.component';
import { WhuserDataViewComponent } from './whuser-c/whuser-data/whuser-data-view.component';


@NgModule({
  declarations: [WhuserCComponent, WhuserDataComponent, 
    WhuserRegisterComponent,WhuserDataUpdateComponent,
    WhuserDataViewComponent],
  imports: [
    CommonModule,FormsModule,WhUserRoutingModule
  ],
  exports:[WhuserCComponent],
  providers:[WhuserCComponent],
})
export class WhuserModule { }
