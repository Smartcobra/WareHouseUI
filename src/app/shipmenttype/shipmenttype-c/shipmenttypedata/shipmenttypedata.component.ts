import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ShipmenttypedataService} from './shipmenttypedata.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as xlsx from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-shipmenttypedata',
  templateUrl: './shipmenttypedata.component.html',
  styleUrls: ['./shipmenttypedata.component.scss']
})
export class ShipmenttypedataComponent implements OnInit {

  fileName = 'ShipmentTypeData.xlsx';
  pdffileName = 'ShipmentTypeData.pdf';
  public element: any[] = [];
  public rows = [];

  constructor(private service: ShipmenttypedataService ,
    private router: Router) { }
    public result: any;

  ngOnInit(): void {
    this.shipmenttypelist();
  }


  shipmenttypelist(){
    this.service.getShipmentTypeData().subscribe((posRes) => {
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
        this.shipmenttypelist();
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
