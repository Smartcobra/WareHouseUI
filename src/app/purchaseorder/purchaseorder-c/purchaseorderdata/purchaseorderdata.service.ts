import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseorderdataService {

  private baseUrl = 'http://localhost:8762/warehouse/po/purchaseorder/rest';

  constructor(private http:HttpClient) { }

  public getPurchaseOrderData():Observable<any>{
    return this.http.get(`${this.baseUrl}/all`);
}

deleteShipmentType(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'json' });
}
updatePurchaseOrder(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/update/${id}`, value);

 }

 getShipmentType(id: number): Observable<any> {
   return this.http.get(`${this.baseUrl}/one/${id}`);
 }

 getOnePurchaseOrder(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/one/${id}`);
}

public getPurchaseOrders(id: number):Observable<any>{
  return this.http.get(`${this.baseUrl}/po/${id}`);
}
public createPurchaseOrderDtlsData(purchaseOrderDtls:any):Observable<any>{
  return this.http.post(`${this.baseUrl}/addpart`,purchaseOrderDtls);

};

public getPartCode():Observable<any>{
  return this.http.get("http://localhost:8762/warehouse/p/part/rest/partcodebasecost");

};

public getPurchaseOrderDtlsList(id: number):Observable<any>{
  return this.http.get(`${this.baseUrl}/dtls/${id}`);
}

deletepurchasedtls(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/pdtl/delete/${id}`, { responseType: 'json' });
}


confirmPO(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/confirmOrder/${id}`);
}

generateInvoiceOrder(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/invoiceOrder/${id}`);
}

}