import { Component, OnInit } from '@angular/core';
import {WhuserDataService} from './whuser-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as xlsx from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Router } from '@angular/router';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-whuser-data',
  templateUrl: './whuser-data.component.html',
  styleUrls: ['./whuser-data.component.scss']
})
export class WhuserDataComponent implements OnInit {

  fileName = 'WhUserData.xlsx';
  pdffileName = 'WhUserData.pdf';
  public element: any[] = [];
  public rows = [];
  public result: any;

  constructor(private service: WhuserDataService ,
    private router: Router) { }

  ngOnInit(): void {
    this.WhUserListlist();
  }


  WhUserListlist(){
    this.service.getWhUserData().subscribe((posRes) => {
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
          '#.' + i, obj.id, obj.userType, obj.userCode, obj.userFor,obj.userMail,obj.userContact,obj.userIdType,obj.ifOther,obj.idNumber
        ]
                   );
    }

    const documentDefinition = {
      content: [{
        text: 'WhUser Details',
        style: 'sectionHeader'
      },

      {
        table: {
          widths: ['*', '*', '*', '*', '*', '*','*','*','*','*'],
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


  deleteWhUserType(id: number) {
    this.service.deleteWhUser(id)
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
        this.WhUserListlist();
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
