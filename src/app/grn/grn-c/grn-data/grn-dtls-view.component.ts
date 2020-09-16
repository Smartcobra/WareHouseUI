import { Component, OnInit,Inject } from '@angular/core';
import { GrnDataService } from './grn-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Grn } from './grn';
import { GrnRegisterService } from '../grn-register/grn-register.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-grn-dtls-view',
  templateUrl: './grn-dtls-view.component.html'
})
export class GrnDtlsViewComponent implements OnInit {
  id_dtls: string;
  status: string;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private service: GrnDataService,
    private registerservice: GrnRegisterService,
    private router: Router, private route: ActivatedRoute,) {
  }

  id: number;
  result: any;
  submitted = false;
  idParam: string;
  statusParam: string;

  ngOnInit(): void {

    this.idParam = this.route.snapshot.queryParamMap.get('iddtls');
    this.statusParam = this.route.snapshot.queryParamMap.get('status');

    this.id = this.route.snapshot.params['id'];
    console.log('from update component');
    this.getgetGrnDtls(this.id);
    // this.service.getGrnDtls(this.id)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.result = data;
    //   }, error => console.log(error));

  }

  getgetGrnDtls(id) {
    this.service.getGrnDtls(id)
      .subscribe(data => {
        console.log(data)
        this.result = data;
      }, error => console.log(error));
  }

  sendStatus() {
    this.service.postStatus(this.idParam, this.statusParam)
      .subscribe(data => {
        console.log(data);
      }, error => console.log(error));
     
      this.getgetGrnDtls(this.id);
      //this.refreshPage();
     /// this.router.navigate([ '/grn/data/part/',this.id ])
  }

  refreshPage() {
    this._document.defaultView.location.reload();
  }
}



