import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UomDataService {

  constructor(private http:HttpClient) { }

    public getUomModuleData():Observable<any>{
      return this.http.get("http://localhost:8762/warehouse/u/rest/uom/uomall");
  };
}
