import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShipmenttypedataService } from './shipmenttypedata.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {ShipmentType} from './shipmenttype';



@Component({
  selector: 'app-shipmenttype-update',
  templateUrl: './shipmenttype-update.component.html'
})
export class ShipmentTypeUpdateComponent implements OnInit {

  constructor(private service: ShipmenttypedataService ,
    private route: ActivatedRoute,private router: Router) { }

  id: number;
  shipmenttype: ShipmentType;
  submitted = false;
  
  ngOnInit() {
    this.shipmenttype = new ShipmentType();
    this.id = this.route.snapshot.params['id'];
           console.log('from update component');
    this.service.getShipmentType(this.id)
      .subscribe(data => {
        console.log(data)
        this.shipmenttype = data;
      }, error => console.log(error));

  }

  updateShipmentData() {
    console.log("in update");
    this.service.updateShipmentType(this.id, this.shipmenttype)
      .subscribe(data => {
        console.log(data);
        this.shipmenttype = new ShipmentType();
       /// this.gotoList();
      }, error => console.log(error));

  }
 
  onSubmit() {
    this.submitted = true;
    this.updateShipmentData();    
  }

  
}
