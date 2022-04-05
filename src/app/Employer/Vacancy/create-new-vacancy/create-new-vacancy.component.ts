import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/_services/employer.service';
import { IdentityService } from 'src/app/_services/identity.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-create-new-vacancy',
  templateUrl: './create-new-vacancy.component.html',
  styleUrls: ['./create-new-vacancy.component.css'],
  providers: [DatePipe],
})
export class CreateNewVacancyComponent implements OnInit {
  empData = this.tokenStorage.getEmp();
  publishDate: string = new Date().toLocaleDateString();
  ISO_lastDate = new Date().toISOString().split('T');
  publishDate_new = this.datepipe.transform(this.publishDate, 'yyyy-MM-dd');

  form: any = {
    publisherEmail: this.empData[0].createdBy,
    jobTitle: null,
    companyName: this.empData[0].organizationName,
    publishedDate: this.publishDate_new,
    noOfVacancies: null,
    minimumQualification: null,
    jobDescription: null,
    experienceRequired: null,
    lastDate: null,
    minSalary: null,
    maxSalary: null,
  };

  errorMessage = '';

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    public datepipe: DatePipe,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.publishDate_new = this.datepipe.transform(
      this.publishDate,
      'yyyy-MM-dd'
    );
  }

  onSubmit(data: any): void {
    console.log(data);
    if (data.minSalary >= data.maxSalary) {
      this.toastr.warning('Min Salary Must be less than Max Salary!!', 'Job-Portal');
      
    } else {
      this.employerService.createNewVacancy(data).subscribe({
        next: (response) => {
          // console.log(response);
          this.toastr.success('Job created successfully', 'Job-Portal');
         
        },
        error: (err) => {
          console.log(err);
          this.toastr.error('Failed to create job!', 'Job-Portal');
        },
      });
    }
  }
}
