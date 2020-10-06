import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


// var headers = new Headers();
// headers.append('Authorization', 'Bearer ' + sessionStorage.getItem("token"));
// headers.append('Content-Type', 'application/json');
// let options = new RequestOptions({ headers: headers });
export class UomRegisterService {

  constructor(private http: HttpClient) { }


  //   public createUomData(uom:any):Observable<any>{
  //     return this.http.post("http://localhost:8762/warehouse/u/rest/uom/insert",uom);
  // };

  public createUomData(uom: any): Observable<any> {
    return this.http.post("http://localhost:8762/warehouse/u/rest/uom/insert", uom).pipe
      (catchError(this.handleError))
      ;
  };

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    //this.errorBody = errorMessage;
   /// console.log(this.errorBody);
    return throwError(errorMessage);

  }

}
