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
  userEmail = this.tokenStorage.getUser().email;
  jskId = this.tokenStorage.getJsk().jobSeekerId;
  jskData: any;

  form: any = {
      firstName: null,
      lastName: null,
      email: this.userEmail,
      phoneNumber: null,
      address: null,
      totalWorkExpericence: null,
      expectedSalary:null,
      dateOfBirth: null,
      jobSeekerId : this.jskId
  };

  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) { }

  
  

  ngOnInit(): void {

    this.jskData = this.tokenStorage.getJsk();
    console.log(this.jskData);
    if (this.jskData.length > 0) {
          this.update = true;

          this.form.firstName = this.jskData[0].firstName;
          this.form.lastName = this.jskData[0].lastName;
          this.form.email = this.jskData[0].email;
          this.form.phoneNumber = this.jskData[0].phoneNumber;
          this.form.address = this.jskData[0].address;
          this.form.phoneNumber = this.jskData[0].phoneNumber;
          this.form.totalWorkExpericence = this.jskData[0].totalWorkExpericence;
          this.form.expectedSalary = this.jskData[0].expectedSalary;
          this.form.dateOfBirth = this.jskData[0].dateOfBirth;
          this.form.jobSeekerId = this.jskData[0].jobSeekerId;
        }
  }

  saveProfile(data: any): void {
    // console.log(data);

    if(this.update){
      console.log("update");
     
        this.jobseekerService.updateJobSeeker(this.userEmail ,data).subscribe({
          next: (res) => {
            console.log(res);
            this.tokenStorage.saveEmployer(res);
            alert('Successfully Updated..');
          },
          error: (err) => {
            console.log(err);
          },
        });
      
    }
    else{
      console.log("create");
      this.jobseekerService.createNewJobSeekerProfile(data).subscribe({
        next: (response) => {
          console.log(response);
         
          alert('Profile Successfully Created!');
          
        },
        error: (err) => {
          // this.errorMessage = err.message;
          alert('Profile Creation Failed!!');
        
        },
      });
    }
    
  }

}
