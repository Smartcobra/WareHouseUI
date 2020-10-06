import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout/logout.component';


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
loadChildren: () => import('src/app/whuser/whuser.module').then(w => w.WhuserModule)},
{path:"ordermethod",
loadChildren: () => import('src/app/ordermethod/ordermethod.module').then(o => o.OrdermethodModule)},
{path:"part",
loadChildren: () => import('src/app/part/part.module').then(pa => pa.PartModule)},
{path:'login',component:LoginComponent},
{path:'logout',component:LogoutComponent}

];

//path: 'auth', loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule) }

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
