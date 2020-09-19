import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdermethodDataService {
  private baseUrl = 'http://localhost:8762/warehouse/o/rest/ordermethod';

  constructor(private http: HttpClient) { }


  public getOrderMethodData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  };

  deleteOrderMethod(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'json' });
  }
  updateOrderMethod(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);

  }
  getOneOrderMethod(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/one/${id}`);
  }
}