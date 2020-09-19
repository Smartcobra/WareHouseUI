import { Component, OnInit } from '@angular/core';
import {OrdermethodDataService} from './ordermethod-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as xlsx from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordermethod-data',
  templateUrl: './ordermethod-data.component.html',
  styleUrls: ['./ordermethod-data.component.scss']
})
export class OrdermethodDataComponent implements OnInit {

  fileName = 'OrderMethod.xlsx';
  pdffileName = 'OrderMethod.pdf';
  public element: any[] = [];
  public rows = [];
  public result: any;

  constructor(private service: OrdermethodDataService ,
    private router: Router) { }

  ngOnInit(): void {
    this.OrderMethodList();
  }


 OrderMethodList(){
    this.service.getOrderMethodData().subscribe((posRes) => {
      this.result = posRes;
      console.log(this.result);
    }, (errRes: HttpErrorResponse) => {
      debugger;
      if (errRes.error instanceof Error)
        console.log("client side error");
      else
        console.log("server side error");
    });
  }

  exportToExcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    xlsx.writeFile(wb, this.fileName);

  }

  downloadPDF(): void {
    this.rows.push(['Sl No', 'id', 'User Type', 'User Code', 'User For',
    'User Mail','User Contact','User ID Type','If Other','ID Number'
  ]);

    for (var i = 0; i < this.result.length; i++) {
      var obj = this.result[i];
      this.rows.push(
        [
          '#.' + i, obj.id, obj.orderMode, obj.orderCode, obj.orderType,obj.orderAcpt,obj.description
        ]
                   );
    }

    const documentDefinition = {
      content: [{
        text: 'OrderMethod Details',
        style: 'sectionHeader'
      },

      {
        table: {
          widths: ['*', '*', '*', '*', '*', '*','*','*'],
          body: this.rows
        }
      }],
      styles: {
        header: {
          fontSize: 22,
          bold: true
        }
      }
    };
    pdfMake.createPdf(documentDefinition).download();
  }


  deleteOrderMethod(id: number) {
    this.service.deleteOrderMethod(id)
      .subscribe(
        data => {
          console.log(data);
        },  
        (errRes:HttpErrorResponse)=>{
          if(errRes.error instanceof Error)
              console.log("client side error");
          else
              console.log("server side error");
      });
        this.OrderMethodList();
  }

  update(id: number){
    console.log("golsdhfdsfsd"+id)
    this.router.navigate(['update', id]);
  }

  view(id: number){
    console.log("golsdhfdsfsd"+id)
    this.router.navigate(['view', id]);
  }
}
