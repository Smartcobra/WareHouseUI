import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UomRegisterService {

  constructor(private http:HttpClient) {}
    public createUomData(uom:any):Observable<any>{
      return this.http.post("http://localhost:8762/warehouse/u/rest/uom/insert",uom);
  };
  
}
