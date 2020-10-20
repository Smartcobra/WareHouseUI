import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private httpClient: HttpClient) { }

    public getUserRole(username):Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }
      return this.httpClient.post<any>("http://localhost:8762/user/role",{username:username},httpOptions).pipe(
        userData => {
          console.log("userData" +userData.forEach(v=>{
            console.log(v)
          }))
           return userData;
          }
      );
  };

//   public getUserRole(Role:any):Observable<any>{
//     return this.httpClient.post<any>("http://localhost:8762/user/role",Role)
// };
}
