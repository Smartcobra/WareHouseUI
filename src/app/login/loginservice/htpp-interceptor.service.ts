import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import {AuthenticationService} from './authentication.service';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
  providedIn: 'root'
})

export class HtppInterceptorService implements HttpInterceptor{

  constructor(private token: AuthenticationService) { }
  
  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   let authReq = req;
  //   const token = this.token.getToken();
  //   console.log(">>>>>>token is"+token);
  //   if (token != null) {
  //     authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
  //    // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY,  token) });
  //   }


    intercept(req: HttpRequest<any>, next: HttpHandler) {

      if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
        req = req.clone({
          setHeaders: {
            Authorization: sessionStorage.getItem('token')
          }
        })
      }
    return next.handle(req);
  }
}

