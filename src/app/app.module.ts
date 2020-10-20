import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import {HtppInterceptorService} from './login/loginservice/htpp-interceptor.service';
import { AutherrorComponent } from './autherror/autherror.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    AutherrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  //providers: [],
 providers: [ { provide: HTTP_INTERCEPTORS, useClass: HtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
