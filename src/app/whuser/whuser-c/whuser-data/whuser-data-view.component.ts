import { Component, OnInit } from '@angular/core';
import { WhuserDataService } from './whuser-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { WhUser } from './WhUserType';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-whuser-data-view',
  templateUrl: './whuser-data-view.component.html'

})
export class WhuserDataViewComponent implements OnInit {
  id: number;
  whuser: WhUser;


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

  

}