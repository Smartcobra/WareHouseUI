import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//const routes: Routes = [ {path:"uom",loadChildren:"./uom/uom.module#UomModule"}];
//
const routes: Routes = [ 
  {path:"uom",
loadChildren: () => import('src/app/uom/uom.module').then(m => m.UomModule)},
{path:"shipmenttype",
loadChildren: () => import('src/app/shipmenttype/shipmenttype.module').then(s => s.ShipmenttypeModule)},
{path:"purchaseorder",
loadChildren: () => import('src/app/purchaseorder/purchaseorder.module').then(p => p.PurchaseorderModule)},
{path:"grn",
loadChildren: () => import('src/app/grn/grn.module').then(g => g.GrnModule)},
{path:"whuser",
loadChildren: () => import('src/app/whuser/whuser.module').then(w => w.WhuserModule)}

];

//path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) }

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
