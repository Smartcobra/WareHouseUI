import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UomDataService } from './uom-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {Uom} from './uomdata'



@Component({
  selector: 'app-uom-update',
  templateUrl: './uom-update.component.html'
})
export class UomUpdateComponent implements OnInit {

  constructor(private service: UomDataService ,
    private route: ActivatedRoute,private router: Router) { }

  id: number;
  uom: Uom;
  submitted = false;
  
  ngOnInit() {
    this.uom = new Uom();
    this.id = this.route.snapshot.params['id'];
           console.log('from update component');
    this.service.getUOM(this.id)
      .subscribe(data => {
        console.log(data)
        this.uom = data;
      }, error => console.log(error));

  }

  updateUomData() {
    console.log("in update");
    this.service.updateUOM(this.id, this.uom)
      .subscribe(data => {
        console.log(data);
        this.uom = new Uom();
       /// this.gotoList();
      }, error => console.log(error));

  }
 
 
  onSubmit() {
    this.submitted = true;
    this.updateUomData();    
  }

  
}
