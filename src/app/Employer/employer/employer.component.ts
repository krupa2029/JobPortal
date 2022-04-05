import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  userEmail = this.tokenStorage.getUser().email;
  userName = this.tokenStorage.getUser().username;

  constructor(private router: Router,  private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.router.navigate(['employer/postedVacancies'])
  }
}
