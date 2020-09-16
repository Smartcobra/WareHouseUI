import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GrnRegisterService {

  constructor(private http:HttpClient) { }


  public getPOOrderCode():Observable<any>{
    return this.http.get("http://localhost:8762/warehouse/po/purchaseorder/rest/status");
  };
  public createGrn(grn:any):Observable<any>{
    return this.http.post("http://localhost:8762/warehouse/g/rest/grn/save",grn);

  };
  
}
