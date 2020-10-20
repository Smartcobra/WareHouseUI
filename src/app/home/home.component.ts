import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/loginservice/authentication.service';
import { HomeService } from './home.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username = '';
  role: any;
  roleid: any;
  constructor(private service: HomeService,
    private loginService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {

  }

  isShow = true;
  name: string;
  featureHide() {
    this.isShow = false;
  };

  show(value) {
    this.name = value;
    console.log(this.name)
  }

  verifyUomRole(value) {
    this.username = sessionStorage.getItem('username');
    console.log("value>.." + value)
    console.log("username>>>>" + this.username)
    this.service.getUserRole(this.username).subscribe((posRes) => {
      if (posRes.roles.indexOf('uomuser') != -1) {
        console.log("I am a valid uomuser")
        this.router.navigate(['/uom']);
      } else {
        this.router.navigate(['/unothorizeerror']);
      }
    }, (errRes: HttpErrorResponse) => {
      if (errRes.error instanceof Error)
        console.log("client side error");
      else
        console.log("server side error");
    });
  }

  verifyShipmentRole(value) {
    this.username = sessionStorage.getItem('username');
    console.log("value>.." + value)
    console.log("username>>>>" + this.username)
    this.service.getUserRole(this.username).subscribe((posRes) => {
      console.log(">>>><<<<<" + posRes.roles.indexOf(value))
      for (var i = 0; i < posRes.roles.length; i++) {
        console.log("the roles are >>###" + posRes.roles[i]);
        //this.persons =  this.personService.getPersons().find(x => x.id == this.personId);
        if (posRes.roles[i] === "shipmenttype") {
          console.log("I am a valid uomuser")
          this.router.navigate(['/uom']);
        }
      }

      this.roleid = posRes.roles.indexOf(value);
      //console.log(">>>><<<<<"+posRes.roles.indexOf("XXX"))
      this.role = posRes;
      console.log("roles are:::" + this.role.roles);
      // //this.persons =  this.personService.getPersons().find(x => x.id == this.personId);
      // if (this.roleid != -1) {
      //   console.log("I am a valid user")
      //   this.router.navigate(['/uom']);
      // }
    }, (errRes: HttpErrorResponse) => {
      // debugger;
      if (errRes.error instanceof Error)
        console.log("client side error");
      else
        console.log("server side error");
    });
  }

  verifyGrnRole(value) {
    this.username = sessionStorage.getItem('username');
    console.log("value>.." + value)
    console.log("username>>>>" + this.username)
    this.service.getUserRole(this.username).subscribe((posRes) => {
      console.log(">>>><<<<<" + posRes.roles.indexOf(value))
      for (var i = 0; i < posRes.roles.length; i++) {
        console.log("the roles are >>###" + posRes.roles[i]);
        //this.persons =  this.personService.getPersons().find(x => x.id == this.personId);
        if (posRes.roles[i] === "shipmenttype") {
          console.log("I am a valid uomuser")
          this.router.navigate(['/uom']);
        }
      }

      this.roleid = posRes.roles.indexOf(value);
      //console.log(">>>><<<<<"+posRes.roles.indexOf("XXX"))
      this.role = posRes;
      console.log("roles are:::" + this.role.roles);
      // //this.persons =  this.personService.getPersons().find(x => x.id == this.personId);
      // if (this.roleid != -1) {
      //   console.log("I am a valid user")
      //   this.router.navigate(['/uom']);
      // }
    }, (errRes: HttpErrorResponse) => {
      // debugger;
      if (errRes.error instanceof Error)
        console.log("client side error");
      else
        console.log("server side error");
    });
  }


}

