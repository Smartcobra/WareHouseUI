import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShipmenttypedataService } from './shipmenttypedata.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {ShipmentType} from './shipmenttype'



@Component({
  selector: 'app-shipmenttype-view',
  templateUrl: './shipmenttype-view.component.html'
})
export class ShipmenttypeViewComponent implements OnInit {

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
  
}
