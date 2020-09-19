import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { OrderMethod } from './ordermethod';
import { OrdermethodRegisterService } from './ordermethod-register.service';

@Component({
  selector: 'app-ordermethod-register',
  templateUrl: './ordermethod-register.component.html',
  styleUrls: ['./ordermethod-register.component.scss']
})
export class OrdermethodRegisterComponent implements OnInit {
  orderMethod: OrderMethod = new OrderMethod();
  submitted = false;

  constructor(private service: OrdermethodRegisterService) { }

  ngOnInit(): void {
  }

  newOrderMethod(): void {
    this.submitted = false;
    this.orderMethod = new OrderMethod();
  }
  save() {
    console.log("hi i am here");
    console.log("fromm save method" + this.orderMethod.description);
    console.log("fromm save method Order Accept" + this.orderMethod.orderAcpt);
    this.service
      .createOrderMethodData(this.orderMethod).subscribe(data => {
        console.log("++++DTAT"+data);
        // debugger;
        this.orderMethod = new OrderMethod();
      },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
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
