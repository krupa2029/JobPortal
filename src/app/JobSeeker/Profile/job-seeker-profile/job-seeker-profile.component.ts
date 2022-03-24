import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-seeker-profile',
  templateUrl: './job-seeker-profile.component.html',
  styleUrls: ['./job-seeker-profile.component.css']
})
export class JobSeekerProfileComponent implements OnInit {

  
  form: any = {
    organizationName: null,
    orgnizationType: null,
    companyEmail: null,
    companyPhone: null,
    noOfEmployees: null,
    startYear: null,
    about: null,
    createdBy: null
  };

  constructor() { }

  ngOnInit(): void {
  }

  createProfile(data: any): void {
    console.log(data);

    // this.employerService.createNewEmployer(data).subscribe({
    //   next: (response) => {
    //     console.log(response);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //     alert('Profile Successfully Created');
    //     // this.router.navigate(['login']);
    //   },
    //   error: (err) => {
    //     // this.errorMessage = err.message;
    //     alert('Profile Creation Failed!!');
    //     this.isSignUpFailed = true;
    //   },
    // });
  }
}
