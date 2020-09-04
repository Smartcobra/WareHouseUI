import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UomDataService } from './uom-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as xlsx from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import {UomUpdateComponent} from './uom-update.component';



@Component({
  selector: 'app-uom-data',
  templateUrl: './uom-data.component.html',
  styleUrls: ['./uom-data.component.scss']
 /// providers:[UomUpdateComponent ]
})
export class UomDataComponent implements OnInit {
  fileName = 'UomData.xlsx';
  pdffileName = 'UomData.pdf';
  public element: any[] = [];
  public rows = [];

  constructor(private service: UomDataService ,private router: Router
    ) { }

  public result: any;
  public result2: any;
  
  ngOnInit() {
    this.Uomlist();
  }

  Uomlist(){
    this.service.getUomModuleData().subscribe((posRes) => {
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
    this.rows.push(['Sl No', 'id', 'uomType', 'uomModel', 'description']);

    for (var i = 0; i < this.result.length; i++) {
      var obj = this.result[i];
      this.rows.push(['#.' + i, obj.id, obj.uomType, obj.uomModel, obj.description]);
      // var obj = this.result[i];
      // console.log(obj.id);
      // console.log(obj.uomType);
      // console.log(obj.uomModel);
      // console.log(obj.description);
    }

    const documentDefinition = {
      content: [{
        text: 'UOM Details',
        style: 'sectionHeader'
      },

      {
        table: {
          widths: ['*', '*', '*', '*', '*', '*'],
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



  //pdfMake.createPdf(documentDefinition).download();
  ////console.log("result is "+JSON.stringify(this.result));
  ///let someArray=JSON.stringify(this.result);


  ///for(var i = 0; i < this.result.length; i++) {
  ///var obj = this.result[i];
  ///console.log(obj.id);
  //// console.log(obj.uomType);
  /// console.log(obj.uomModel);
  /// console.log(obj.description);

  deleteUOM(id: number) {
    this.service.deleteUOM(id)
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
        this.Uomlist();
  }

  reloadData() {
    //this.employees = this.employeeService.getEmployeesList();
  }

  update(id: number){
    console.log("golsdhfdsfsd"+id)
   /// this.update.updateUomData(id);
    this.router.navigate(['update', id]);
  }

  view(id: number){
    console.log("golsdhfdsfsd"+id)
    this.router.navigate(['view', id]);
  }
}
