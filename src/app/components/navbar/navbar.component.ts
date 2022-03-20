import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  
  isLoggedIn = false;
  role = '';

  constructor(private tokenStorage: TokenStorageService,) { }

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
  }

  changePassword(): void {
    alert("changePassword");
  }
}
