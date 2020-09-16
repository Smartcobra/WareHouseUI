import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhuserCComponent } from './whuser-c/whuser-c.component';
import { FormsModule } from '@angular/forms';
import { WhUserRoutingModule } from './whuser-routing.module';
import { WhuserDataComponent } from './whuser-c/whuser-data/whuser-data.component';
import { WhuserRegisterComponent } from './whuser-c/whuser-register/whuser-register.component';



@NgModule({
  declarations: [WhuserCComponent, WhuserDataComponent, WhuserRegisterComponent],
  imports: [
    CommonModule,FormsModule,WhUserRoutingModule
  ],
  exports:[WhuserCComponent],
  providers:[WhuserCComponent],
})
export class WhuserModule { }
