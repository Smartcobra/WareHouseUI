import { Component, OnInit } from '@angular/core';
import { WhuserDataService } from './whuser-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { WhUser } from './WhUserType';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-whuser-data-update',
  templateUrl: './whuser-data-update.component.html'

})
export class WhuserDataUpdateComponent implements OnInit {
  id: number;
  whuser: WhUser;
  submitted = false;
  
  userType: any;
  isReadOnly: boolean=true;

  constructor(private service: WhuserDataService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.whuser = new WhUser();
    this.id = this.route.snapshot.params['id'];
    console.log('from update component');
    this.service.getOneWhUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.whuser = data;
      }, error => console.log(error));
  }

  updateWhUserData() {
    console.log("in update");
    this.service.updateWhUser(this.id, this.whuser)
      .subscribe(data => {
        console.log(data);
        this.whuser = new WhUser();
      }, error => console.log(error));

  }
  onSubmit() {
    this.submitted = true;
    this.updateWhUserData();    
  }

  setUserFor(e: string): void {
    console.log("e>>>>>>>" + e)
    this.userType = e;
    this.whuser.userFor = 'OPEN';
    if (e == 'Vendor') {
      this.whuser.userFor = 'Purchase';
    }
    if (e == 'Customer') {
      this.whuser.userFor = 'Sale';
    }
  }

  selectUserIdType() {
    ///alert(this.whuser.userIdType);
    if (this.whuser.userIdType=='OTHER') {
      console.log(">>>>>>"+this.whuser.userIdType)
     this.isReadOnly=false;
    }else{
      this.isReadOnly=true;
    }
  }

}