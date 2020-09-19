import { Component, OnInit } from '@angular/core';
import {Shipmenttype} from './shipmenttype';
import {ShipmenttyperegisterService} from './shipmenttyperegister.service'

@Component({
  selector: 'app-shipmenttyperegister',
  templateUrl: './shipmenttyperegister.component.html',
  styleUrls: ['./shipmenttyperegister.component.scss']
})
export class ShipmenttyperegisterComponent implements OnInit {

  shipmenttype:Shipmenttype = new Shipmenttype();
  submitted = false;
  constructor(private service: ShipmenttyperegisterService) { }

  ngOnInit(): void { 
  }
  
  newShipmenttype(): void {
    this.submitted = false;
    this.shipmenttype = new Shipmenttype();
  }
  save() {
    console.log("hi i am here");
    console.log("fromm uom"+this.shipmenttype.description);
    this.service
    .createShipmenttypeData(this.shipmenttype).subscribe(data => {
      console.log(data);
     // debugger;
      this.shipmenttype = new Shipmenttype();
    }, 
    error => console.log(error));
  }

  
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
}
