import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UomCComponent} from './uom-c/uom-c.component';
import { UomRegisterComponent } from './uom-c/uom-register/uom-register.component';
import { UomDataComponent } from './uom-c/uom-data/uom-data.component';
import { UomUpdateComponent } from './uom-c/uom-data/uom-update.component';
import{UomViewComponent} from './uom-c/uom-data/uom-view.component'
import { HomeComponent } from '../home/home.component';



//const routes: Routes = [ {path:'',component:UomCComponent}]

const routes: Routes = [ 
  {path:'',
     children:[
       {path:'',component:UomCComponent},
      // {path:'home',component:UomCComponent},
       {path:'home',component:HomeComponent},
       {path:'register',component:UomRegisterComponent},
       {path:'data',component:UomDataComponent},
       {path:'data/update/:id',component:UomUpdateComponent},
       {path:'data/view/:id',component:UomViewComponent}
]
            }

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UomRoutingModule { }
