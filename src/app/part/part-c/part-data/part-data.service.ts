import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PartDataService {

  private baseUrl = 'http://localhost:8762/warehouse/p/part/rest';

  constructor(private http: HttpClient) { }


  public gePartData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  };

  deletePart(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'json' });
  }
  updatePart(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);

  }
  getOnePart(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/one/${id}`);
  }
}