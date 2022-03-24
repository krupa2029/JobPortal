import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployerDetail } from 'src/app/_models/employer-detail.model';
// import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/_services/employer.service';
import { IdentityService } from 'src/app/_services/identity.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css'],
})
export class EmployerProfileComponent implements OnInit {
  emailcreatedBy = this.tokenStorage.getUser().email;
  update: boolean = false;

  form: any = {
    organizationName: null,
    orgnizationType: null,
    companyEmail: null,
    companyPhone: null,
    noOfEmployees: null,
    startYear: null,
    about: null,
    createdBy: this.emailcreatedBy,
  };

  empData: any = '';
  

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) // private toastr: ToastrService
  {}

  ngOnInit(): void {
    // this.emailcreatedBy = this.tokenStorage.getUser().email;
    // console.log(this.emailcreatedBy);

    this.employerService.getEmployerByEmail(this.emailcreatedBy).subscribe({
      next: (response) => {
        this.empData = response;
        this.tokenStorage.saveEmployer(this.empData);
        console.log(this.empData);
        if (this.empData.length > 0) {
          this.update = true;
        }

       
      },
      error: (err) => {
        console.log(err);
        alert('Unable to fetch Data!!');
        // this.isSignUpFailed = true;
      },
    });

  }


 createProfile(data: any): void {
    console.log(data);

    this.employerService.createNewEmployer(data).subscribe({
      next: (response) => {
        console.log(response);
        alert('Profile Successfully Created');
        // this.router.navigate(['login']);
      },
      error: (err) => {
        // this.errorMessage = err.message;
        alert('Profile Creation Failed!!');
      },
    });
  }

  updateProfile(id : any, data: any) {
    this.employerService.updateEmployerById(id,data).subscribe({
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
}

