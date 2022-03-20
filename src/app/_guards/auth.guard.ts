import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IdentityService } from '../_services/identity.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService, private route: Router) {
  }
  canActivate(){
    if (this.tokenStorageService.getToken()) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
  }
   
  
  

