import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/_services/identity.service';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit {

  form: any = {
    organizationName: null,
    orgnizationType: null,
    companyEmail: null,
    companyPhone: null,
    noOfEmployees: null,
    startYear: null,
    about: null,
    // createdBy: user@example.com
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private identityService: IdentityService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(data: any): void {
    console.log(data);

    
      // this.identityService.register(data).subscribe({
      //   next: (response) => {
      //     console.log(response);
      //     this.isSuccessful = true;
      //     this.isSignUpFailed = false;
      //     this.router.navigate(['login']);
      //   },
      //   error: (err) => {
      //     this.errorMessage = err.error.message;
      //     this.isSignUpFailed = true;
      //   },
      // });
    }
  }


