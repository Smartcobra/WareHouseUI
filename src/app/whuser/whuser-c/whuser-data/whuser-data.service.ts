import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhuserDataService {
  private baseUrl = 'http://localhost:8762/warehouse/w/rest/whuser';

  constructor(private http: HttpClient) { }


  public getWhUserData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  };

  deleteWhUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'json' });
  }
  updateWhUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);

  }
  getOneWhUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/one/${id}`);
  }
}
