import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const EMP_KEY ='emp-data';
const JSK_KEY ='jsk-data';
const VACREQ_KEY ='vacReq-data';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public removeUser(): void {
    window.localStorage.removeItem(USER_KEY);
  }

  public saveEmployer(data: any): void {
    window.localStorage.removeItem(EMP_KEY);
    window.localStorage.setItem(EMP_KEY, JSON.stringify(data));
  }

  public saveJobseeker(data: any): void {
    window.localStorage.removeItem(JSK_KEY);
    window.localStorage.setItem(JSK_KEY, JSON.stringify(data));
  }
  
  public saveVacReq(data: any): void {
    window.localStorage.removeItem(VACREQ_KEY);
    window.localStorage.setItem(VACREQ_KEY, JSON.stringify(data));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public getEmp(): any {
    const empData = window.localStorage.getItem(EMP_KEY);
    if (empData) {
      return JSON.parse(empData);
    }

    return {};
  }

  public getJsk(): any {
    const jskData = window.localStorage.getItem(JSK_KEY);
    if (jskData) {
      return JSON.parse(jskData);
    }

    return {};
  }
 

  public getVacReq(): any {
    const vacReqData = window.localStorage.getItem(VACREQ_KEY);
    if (vacReqData) {
      return JSON.parse(vacReqData);
    }

    return {};
  }
  
  public removeToken(): void {
    window.localStorage.removeItem(TOKEN_KEY);
    // window.localStorage.removeItem(USER_KEY);
  }

 
}
