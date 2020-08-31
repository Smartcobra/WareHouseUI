import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UomRegisterComponent } from './uom/uom-c/uom-register/uom-register.component';

//const routes: Routes = [ {path:"uom",loadChildren:"./uom/uom.module#UomModule"}];
//
const routes: Routes = [ {path:"uom",
loadChildren: () => import('src/app/uom/uom.module').then(m => m.UomModule)}

];

//path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) }

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
