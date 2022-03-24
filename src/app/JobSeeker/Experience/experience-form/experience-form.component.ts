import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {

  form: any = {
        companyName: null,
        startDate:null,
        endDate: null,
        companyUrl: null,
        designation: null,
        jobDescription: null,
  };

  constructor() { }

  ngOnInit(): void {
  }

  AddExperience(data: any): void {
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
