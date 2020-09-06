import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipmenttypedataService {
  private baseUrl = 'http://localhost:8762/warehouse/s/rest';

  constructor(private http:HttpClient) { }

  public getShipmentTypeData():Observable<any>{
    return this.http.get(`${this.baseUrl}/allshipmenttype`);
};

deleteShipmentType(id: number): Observable<any> {
  return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'json' });
}
updateShipmentType(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/update/${id}`, value);

 }

 getShipmentType(id: number): Observable<any> {
   return this.http.get(`${this.baseUrl}/one/${id}`);
 }

}
