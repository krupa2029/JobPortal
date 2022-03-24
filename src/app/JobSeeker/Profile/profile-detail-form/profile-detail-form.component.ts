import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-profile-detail-form',
  templateUrl: './profile-detail-form.component.html',
  styleUrls: ['./profile-detail-form.component.css']
})
export class ProfileDetailFormComponent implements OnInit {

  update: boolean = false;

  form: any = {
      firstName: null,
      lastName: null,
      // email: null,
      phoneNumber: null,
      address: null,
      totalWorkExpericence: null,
      expectedSalary:null,
      dateOfBirth: null
  };

  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) { }

  jskData: any;
  

  ngOnInit(): void {

    this.jskData = this.tokenStorage.getJsk();
    console.log(this.jskData);
    if (this.jskData.length > 0) {
          this.update = true;

          this.form.firstName = this.jskData[0].firstName;
          this.form.lastName = this.jskData[0].lastName;
          // this.form.email = this.jskData[0].email;
          this.form.phoneNumber = this.jskData[0].phoneNumber;
          this.form.address = this.jskData[0].address;
          this.form.phoneNumber = this.jskData[0].phoneNumber;
          this.form.totalWorkExpericence = this.jskData[0].totalWorkExpericence;
          this.form.expectedSalary = this.jskData[0].expectedSalary;
          this.form.dateOfBirth = this.jskData[0].dateOfBirth;
          
        }
  }

  saveProfile(data: any): void {
    // console.log(data);

    if(this.update){
      console.log("update");
    }
    else{
      console.log("create");
    }
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
