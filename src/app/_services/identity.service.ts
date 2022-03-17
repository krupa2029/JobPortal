import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetail } from '../_models/user-detail.model';

const AUTH_API = 'https://localhost:5021/Identity/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username,
      password
    }, httpOptions);
  }

  register( 
    userDetail: UserDetail
    ): Observable<any> {
      console.log(userDetail);
    return this.http.post(AUTH_API + 'register', userDetail , httpOptions);
  }

  logOut(): void{
    window.sessionStorage.clear();
  }

  getByUserName(
    userName: string
  ): Observable<any> {
    return this.http.get(AUTH_API + 'getByUserName/'+ userName , httpOptions);
  }

  changePassword(data: any): Observable<any> {
    return this.http.post(AUTH_API + 'changePassword',data, httpOptions);
}

}
