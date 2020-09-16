import { Component, OnInit } from '@angular/core';
import {GrnDataService} from './grn-data.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Grn } from './grn';
import {GrnRegisterService} from '../grn-register/grn-register.service';


@Component({
  selector: 'app-grn-data-view',
  templateUrl: './grn-data-view.component.html'
})
export class GrnDataViewComponent implements OnInit {

  constructor(private service: GrnDataService,
    private registerservice: GrnRegisterService,
    private router: Router,private route: ActivatedRoute,) { }

    id: number;
    grn: Grn;
    submitted = false;
  
  ngOnInit(): void {
    this.grn = new Grn();
    this.id = this.route.snapshot.params['id'];
           console.log('from update component');
    this.service.getOneGrn(this.id)
      .subscribe(data => {
        console.log(data)
        this.grn = data;
      }, error => console.log(error));

  }

  
      
}


  
 