import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseorderregisterService {

  constructor(private http:HttpClient) { }

  public createPurchaseOrderData(purchaseorder:any):Observable<any>{
    return this.http.post("http://localhost:8762/warehouse/po/purchaseorder/rest/insert",purchaseorder);

  };

  public getShipmentcode():Observable<any>{
    return this.http.get("http://localhost:8762/warehouse/s/rest/shipmentcode");

  };

  public getWhuserType():Observable<any>{
    return this.http.get("http://localhost:8762/warehouse/w/rest/whusertypecode");

  };

}
