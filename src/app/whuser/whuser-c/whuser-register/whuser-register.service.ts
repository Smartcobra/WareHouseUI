import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhuserRegisterService {

  constructor(private http:HttpClient) { }

  public createWhuserData(shipmenttype:any):Observable<any>{
    return this.http.post("http://localhost:8762/warehouse/w/whusertype/rest/insert",shipmenttype);
};
}
