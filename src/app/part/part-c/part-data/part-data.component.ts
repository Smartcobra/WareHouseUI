import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import * as xlsx from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Router } from '@angular/router';
import {PartDataService} from './part-data.service';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-part-data',
  templateUrl: './part-data.component.html',
  styleUrls: ['./part-data.component.scss']
})
export class PartDataComponent implements OnInit {

  fileName = 'PartData.xlsx';
  pdffileName = 'PartData.pdf';
  public element: any[] = [];
  public rows = [];
  public result: any;

  constructor(private service: PartDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.PartList();
  }


  PartList(){
    this.service.gePartData().subscribe((posRes) => {
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
    this.rows.push(['Sl No', 'id', 'Part Code', 'Part Width', 'Part Length',
    'Base Cost','Base Currency','Uom','Description'
  ]);

    for (var i = 0; i < this.result.length; i++) {
      var obj = this.result[i];
      this.rows.push(
        [
          '#.' + i, obj.id, obj.partCode, obj.partWidth, obj.partLen,obj.partHgh,obj.baseCost,obj.baseCurr,obj.description
        ]
                   );
    }

    const documentDefinition = {
      content: [{
        text: 'Part Details',
        style: 'sectionHeader'
      },

      {
        table: {
          widths: ['*', '*', '*', '*', '*', '*','*','*','*'],
          body: this.rows
        }
      }],
      styles: {
        header: {
          fontSize: 10,
          bold: true
        }
      }
    };
    pdfMake.createPdf(documentDefinition).download();
  }


  deletePartData(id: number) {
    this.service.deletePart(id)
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
        this.PartList();
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
