import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UomDataService {

  private baseUrl = 'http://localhost:8762/warehouse/u/rest/uom';
  constructor(private http:HttpClient) { }

    public getUomModuleData():Observable<any>{
      return this.http.get("http://localhost:8762/warehouse/u/rest/uom/uomall");
  };

  deleteUOM(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'json' });
  }
  updateUOM(id: number, value: any): Observable<Object> {
   return this.http.put(`${this.baseUrl}/update/${id}`, value);
    //return this.http.put(`http://localhost:8762/warehouse/u/rest/uom/update/${id}`, value);
   // http://localhost:8762/warehouse/u/rest/uom/update/503
  }

  getUOM(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/one/${id}`);
  }
}
