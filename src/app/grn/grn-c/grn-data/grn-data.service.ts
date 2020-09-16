import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrnDataService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8762/warehouse/g/rest/grn';

  public getGrnData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  };

  deleteGrnData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'json' });
  }
  updateGrn(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);

  }
  getOneGrn(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/one/${id}`);
  }

  getGrnDtls(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/grnDtls/${id}`);
  }
  postStatus(iddtls: any, statusParam: any): Observable<Object> {
    return this.http.get(`${this.baseUrl}/status/${iddtls}/${statusParam}`);

  }
}
