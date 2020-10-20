import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class User {
  constructor(
    public status: string,
  ) { }

}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


export class JwtResponse {
  constructor(
    public jwttoken: string,
  ) { }

}
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})



export class AuthenticationService {

 
  constructor(private httpClient: HttpClient) { }

  authenticate(username, password) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log("user name"+username)
    console.log("password"+password);
    return this.httpClient.post<any>('http://localhost:8762/user/login',{username,password},httpOptions).pipe(
    map(
       userData => {
       // debugger;
        sessionStorage.setItem('username',username);
       let tokenStr= userData.token;
        sessionStorage.setItem('token', tokenStr);
       console.log("the token is :::"+tokenStr)
        return userData;
       }
     )

    );
  }


  // authenticate(username, password): Observable<any> {
  //   return this.httpClient.post('http://localhost:8762/warehouse/u/user/login', { username, password }, httpOptions);
  // }




  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    window.sessionStorage.clear();
  }

  // public saveToken() {
  //   window.sessionStorage.removeItem(TOKEN_KEY);
  //   window.sessionStorage.setItem(TOKEN_KEY, this.tokenStr);
  // }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }
}
