import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmenttyperegisterService {

  constructor(private http:HttpClient) { }

  public createShipmenttypeData(shipmenttype:any):Observable<any>{
    return this.http.post("http://localhost:8762/warehouse/s/rest/insert",shipmenttype);
};
}
