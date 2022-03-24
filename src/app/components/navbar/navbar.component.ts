import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  
  isLoggedIn = false;
  role = '';

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
          this.isLoggedIn = true;
          this.role = this.tokenStorage.getUser().userType;
        }
  }

  ngAfterViewChecked(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().userType;
    }
  }

  onLogout(): void {
    this.tokenStorage.removeToken();
    this.router.navigate([''])
  }

  changePassword(): void {
    alert("changePassword");
  }
}
