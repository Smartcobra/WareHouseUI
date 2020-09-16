import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WhuserCComponent} from './whuser-c/whuser-c.component';
import { WhuserRegisterComponent } from './whuser-c/whuser-register/whuser-register.component';
import { WhuserDataComponent } from './whuser-c/whuser-data/whuser-data.component';
// import { UomUpdateComponent } from './uom-c/uom-data/uom-update.component';
// import{UomViewComponent} from './uom-c/uom-data/uom-view.component'



//const routes: Routes = [ {path:'',component:UomCComponent}]

const routes: Routes = [ 
  {path:'',
     children:[
      {path:'',component:WhuserCComponent},
       {path:'register',component:WhuserRegisterComponent},
      {path:'data',component:WhuserDataComponent},
      //  {path:'data/update/:id',component:UomUpdateComponent},
      //  {path:'data/view/:id',component:UomViewComponent}
]
            }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhUserRoutingModule { }
