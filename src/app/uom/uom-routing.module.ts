import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{UomCComponent} from './uom-c/uom-c.component';
import { UomRegisterComponent } from './uom-c/uom-register/uom-register.component';
import { UomDataComponent } from './uom-c/uom-data/uom-data.component';


//const routes: Routes = [ {path:'',component:UomCComponent}]

const routes: Routes = [ 
  {path:'',
     children:[
       {path:'',component:UomCComponent},
       {path:'register',component:UomRegisterComponent},
       {path:'data',component:UomDataComponent}
]
            }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UomRoutingModule { }
