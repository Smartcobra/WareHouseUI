import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartRegisterService {

  constructor(private http:HttpClient) { }


  public createPartData(purchaseorder:any):Observable<any>{
    return this.http.post("http://localhost:8762/warehouse/p/part/rest/insert",purchaseorder);

  };

  public getUOM():Observable<any>{
    return this.http.get("http://localhost:8762/warehouse/u/rest/uom/all");

  };
}
