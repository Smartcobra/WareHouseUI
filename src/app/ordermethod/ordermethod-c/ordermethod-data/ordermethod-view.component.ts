import { Component, OnInit } from '@angular/core';
import { OrdermethodDataService } from './ordermethod-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderMethod } from './ordermethod';

@Component({
  selector: 'app-ordermethod-data',
  templateUrl: './ordermethod-view.component.html'
  
})
export class OrderMethodViewComponent implements OnInit {


  id: number;
  ordermethod: OrderMethod;

  constructor(private service: OrdermethodDataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ordermethod = new OrderMethod();
    this.id = this.route.snapshot.params['id'];
    console.log('from update component');
    this.service.getOneOrderMethod(this.id)
      .subscribe(data => {
        console.log(data)
        this.ordermethod = data;
      }, error => console.log(error));

  }

}
