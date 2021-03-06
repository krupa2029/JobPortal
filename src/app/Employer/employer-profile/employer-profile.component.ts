import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastr: ToastrService
  ) 
  {}

  ngOnInit(): void {
    this.employerService.getEmployerByEmail(this.emailcreatedBy).subscribe({
      next: (response) => {
        this.empData = response;
        this.tokenStorage.saveEmployer(this.empData);
        if (this.empData.length > 0) {
          this.update = true;
        }
      },
      error: (err) => {
        this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
      },
    });

  }


 createProfile(data: any): void {
   
    this.employerService.createNewEmployer(data).subscribe({
      next: (response) => {
        this.toastr.success('Profile created successfully..', 'Job-Portal');
      },
      error: (err) => {
        this.toastr.error('Failed to create profile!', 'Job-Portal');
      },
    });
  }

  updateProfile(id : any, data: any) {
    this.employerService.updateEmployerById(id,data).subscribe({
      next: (res) => {
        this.tokenStorage.saveEmployer(res);
        this.toastr.success('Profile updated successfully..', 'Job-Portal');
      },
      error: (err) => {
        this.toastr.error('Failed to update profile!', 'Job-Portal');
      },
    });
  }
}

