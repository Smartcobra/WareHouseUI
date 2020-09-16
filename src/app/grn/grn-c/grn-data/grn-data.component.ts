import { Component, OnInit } from '@angular/core';
import {GrnDataService} from './grn-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import * as xlsx from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-grn-data',
  templateUrl: './grn-data.component.html',
  styleUrls: ['./grn-data.component.scss']
})
export class GrnDataComponent implements OnInit {

  constructor(private service: GrnDataService,
    private router: Router) { }


  fileName = 'GrnData.xlsx';
  pdffileName = 'GrnData.pdf';
  public result: any;
  public element: any[] = [];
  public rows = [];
  error400:any;
  errorMessage:any;

  ngOnInit(): void {
    this.grndata();
  }


  grndata(){
    this.service.getGrnData().subscribe((posRes) => {
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
    this.rows.push(['Sl No', 'id', 'shipmentMode', 'shipmentCode', 'enableShipment',
    'shipmentGrade','description'
  ]);

    for (var i = 0; i < this.result.length; i++) {
      var obj = this.result[i];
      this.rows.push(
        [
          '#.' + i, obj.id, obj.shipmentMode, obj.shipmentCode, obj.enableShipment,obj.shipmentGrade,obj.description
        ]
                   );
    }

    const documentDefinition = {
      content: [{
        text: 'GRN Details',
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


  deleteGrn(id: number) {
    this.errorMessage = "";
    this.service.deleteGrnData(id)
      .subscribe(
        data => {
          console.log(data);
        },  
        (errRes:HttpErrorResponse)=>{
          this.errorMessage = errRes.error;
      });
        this.grndata();
  }

}
