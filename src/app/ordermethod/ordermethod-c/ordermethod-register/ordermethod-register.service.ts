import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdermethodRegisterService {

  constructor(private http: HttpClient) { }

  public createOrderMethodData(ordermethod: any): Observable<any> {
    return this.http.post("http://localhost:8762/warehouse/o/rest/ordermethod/insert", ordermethod);
  };
}
