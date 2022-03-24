import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const EMP_KEY ='emp-data';
const JSK_KEY ='jsk-data';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public removeUser(): void {
    window.sessionStorage.removeItem(USER_KEY);
  }

  public saveEmployer(data: any): void {
    window.sessionStorage.removeItem(EMP_KEY);
    window.sessionStorage.setItem(EMP_KEY, JSON.stringify(data));
  }

  public saveJobseeker(data: any): void {
    window.sessionStorage.removeItem(JSK_KEY);
    window.sessionStorage.setItem(JSK_KEY, JSON.stringify(data));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public getEmp(): any {
    const empData = window.sessionStorage.getItem(EMP_KEY);
    if (empData) {
      return JSON.parse(empData);
    }

    return {};
  }

  public getJsk(): any {
    const jskData = window.sessionStorage.getItem(JSK_KEY);
    if (jskData) {
      return JSON.parse(jskData);
    }

    return {};
  }
  
  public removeToken(): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    // window.sessionStorage.removeItem(USER_KEY);
  }

 
}
