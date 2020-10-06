import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from './loginservice/authentication.service';
import {UomUser} from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 username = '';
 password = '';
  user:UomUser;
  invalidLogin = false
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
    if (this.loginservice.getToken()) {
      this.isLoggedIn = true;
    }
  }


  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {

       // this.loginservice.saveToken(data.accessToken);
        console.log("data.accessToken"+data.accessToken)
        this.loginservice.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log("user name"+data)
        console.log("Password"+data)
        this.router.navigate(['/uom'])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );
  }
}
