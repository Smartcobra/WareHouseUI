import { Component, OnInit } from '@angular/core';
import { WhUserType } from './whusertype';
import { WhuserRegisterService } from './whuser-register.service';
declare var $: any;
console.log(`jQuery version: ${$.fn.jquery}`);

@Component({
  selector: 'app-whuser-register',
  templateUrl: './whuser-register.component.html',
  styleUrls: ['./whuser-register.component.scss']
})
export class WhuserRegisterComponent implements OnInit {



  whuser: WhUserType = new WhUserType();
  submitted = false;
  userType: any;
  isReadOnly: boolean=true;

  constructor(private service: WhuserRegisterService) { }

  ngOnInit(): void {

  }
  save() {
    console.log("hi i am here");
    this.service
      .createWhuserData(this.whuser).subscribe(data => {
        console.log(data);
        // debugger;
        this.whuser = new WhUserType();
      },
        error => console.log(error));
  }


  onSubmit() {
    this.submitted = true;
    this.save();
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
