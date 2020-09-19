import { Component, OnInit } from '@angular/core';
import { PartRegisterService } from '../part-register/part-register.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PartDataService } from './part-data.service';
import { Part } from './part';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-part-data',
  templateUrl: './part-data-update.component.html',
  styleUrls: ['./part-data.component.scss']
})
export class PartDataUpdateComponent implements OnInit {
  uom :any;
  id: number;
  part: Part;
  submitted = false;


  constructor(private registerService:PartRegisterService,
    private service:PartDataService, 
    private route: ActivatedRoute, private router: Router
    ) { }

  ngOnInit(): void {

    this.part = new Part();
    this.id = this.route.snapshot.params['id'];
    console.log('from update component');
    this.service.getOnePart(this.id)
      .subscribe(data => {
        console.log(data)
        this.part = data;
      }, error => console.log(error));

    this.registerService.getUOM().subscribe((posRes) => {
      this.uom = posRes;
     console.log(this.uom);
    }, (errRes: HttpErrorResponse) => {
      debugger;
      if (errRes.error instanceof Error)
        console.log("client side error");
      else
        console.log("server side error");
    });
  }

  updatePartData() {
    console.log("in update");
    this.service.updatePart(this.id, this.part)
      .subscribe(data => {
        console.log(data);
        this.part = new Part();
      }, error => console.log(error));

  }
  onSubmit() {
    this.submitted = true;
    this.updatePartData();    
  }

}
