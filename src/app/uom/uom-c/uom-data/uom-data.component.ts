import { Component, OnInit } from '@angular/core';
import {UomDataService} from './uom-data.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-uom-data',
  templateUrl: './uom-data.component.html',
  styleUrls: ['./uom-data.component.scss']
})
export class UomDataComponent implements OnInit {

  constructor(private service:UomDataService) { }
  public result:any;
  ngOnInit(): void {
    this.service.getUomModuleData().subscribe((posRes)=>{
      this.result = posRes;
  },(errRes:HttpErrorResponse)=>{
    debugger;
      if(errRes.error instanceof Error)
          console.log("client side error");
      else
          console.log("server side error");
  });
  }

}
