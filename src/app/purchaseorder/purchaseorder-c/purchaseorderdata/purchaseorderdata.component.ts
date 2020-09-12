import { Component, OnInit } from '@angular/core';
import {PurchaseorderdataService} from './purchaseorderdata.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import * as xlsx from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-purchaseorderdata',
  templateUrl: './purchaseorderdata.component.html',
  styleUrls: ['./purchaseorderdata.component.scss']
})
export class PurchaseorderdataComponent implements OnInit {

  fileName = 'Purchaseorder.xlsx';
  pdffileName = 'Purchaseorder.pdf';
  public element: any[] = [];
  public rows = [];

  constructor(private service: PurchaseorderdataService ,
    private router: Router) { }
    public result: any;

  ngOnInit(): void {
    this.purchaseOrderList();
  }


  purchaseOrderList(){
    this.service.getPurchaseOrderData().subscribe((posRes) => {
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
      // var obj = this.result[i];
      // console.log(obj.id);
      // console.log(obj.uomType);
      // console.log(obj.uomModel);
      // console.log(obj.description);
    }

    const documentDefinition = {
      content: [{
        text: 'Shipmenttype Details',
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


  deleteShipmenttype(id: number) {
    this.service.deleteShipmentType(id)
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
        this.purchaseOrderList();
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
