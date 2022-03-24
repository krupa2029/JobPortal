import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification-form',
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.css']
})
export class QualificationFormComponent implements OnInit {

  form: any = {
    qualificationName: null,
    university: null,
    yearOfCompletion: null,
    grade: null,
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
