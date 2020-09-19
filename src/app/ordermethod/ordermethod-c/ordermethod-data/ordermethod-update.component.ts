import { Component, OnInit } from '@angular/core';
import { OrdermethodDataService } from './ordermethod-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderMethod } from './ordermethod';

@Component({
  selector: 'app-ordermethod-data',
  templateUrl: './ordermethod-update.component.html'
  
})
export class OrderMethodUpdateComponent implements OnInit {


  id: number;
  orderMethod: OrderMethod;
  submitted = false;

  constructor(private service: OrdermethodDataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.orderMethod = new OrderMethod();
    this.id = this.route.snapshot.params['id'];
           console.log('from update component');
    this.service.getOneOrderMethod(this.id)
      .subscribe(data => {
        console.log(data)
        this.orderMethod = data;
      }, error => console.log(error));

  }

  updateOrderMethod() {
    console.log("in update");
    this.service.updateOrderMethod(this.id, this.orderMethod)
      .subscribe(data => {
        console.log(data);
        this.orderMethod = new OrderMethod();
      }, error => console.log(error));

  }
  onSubmit() {
    this.submitted = true;
    this.updateOrderMethod();    
  }
  selectedItemsList = [];
  AccptOrders = [];

  checkboxesDataList = [
    {
      id: 'O001',
      label: 'Multi-Model',
      isChecked: false
    },
    {
      id: 'O002',
      label: 'Accept Return',
      isChecked: false
    }]

  changeSelection() {
    this.fetchSelectedItems()
  }

  fetchSelectedItems()  {
    this.AccptOrders = []
    this.checkboxesDataList.forEach((value, index) => {
      if (value.isChecked) {
       // this.AccptOrders.push(value.id);
        console.log(">>>>>>>>"+value.label);
        this.AccptOrders.push(value.label);
        this.orderMethod.orderAcpt=this.AccptOrders;
      }
    });
  }
}
