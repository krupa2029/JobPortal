import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/_services/identity.service';

@Component({
  selector: 'app-create-new-vacancy',
  templateUrl: './create-new-vacancy.component.html',
  styleUrls: ['./create-new-vacancy.component.css']
})
export class CreateNewVacancyComponent implements OnInit {


  form: any = {
    // publishedBy: null, Employer Name
    publishedDate: null,
    noOfVacancies: null,
    minimumQualification: null,
    jobDescription: null,
    experienceRequired: null,
    lastDate: null,
    minSalary: null,
    maxSalary: null
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

