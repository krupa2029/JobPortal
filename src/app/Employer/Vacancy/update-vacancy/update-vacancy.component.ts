import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/_services/employer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-update-vacancy',
  templateUrl: './update-vacancy.component.html',
  styleUrls: ['./update-vacancy.component.css'],
})
export class UpdateVacancyComponent implements OnInit {
  id: any;
  data: any;
  publishedBy = this.tokenStorage.getEmp().createdBy;
  companyName = this.tokenStorage.getEmp().organizationName;

  form: any = {
    publisherEmail: this.publishedBy,
    jobTitle: null,
    companyName: this.companyName,
    publishedDate: null,
    noOfVacancies: null,
    minimumQualification: null,
    jobDescription: null,
    experienceRequired: null,
    lastDate: null,
    minSalary: null,
    maxSalary: null,
  };

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
     
    this.employerService.getVacancyById(this.id).subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
      },
    });
  }

  onSubmit(result: any): void {
    if (result.minSalary >= result.maxSalary) {
      this.toastr.warning('Min Salary Must be less than Max Salary!!', 'Job-Portal');
    } else {
      this.employerService
        .updateVacancyById(this.data.jobId, result)
        .subscribe({
          next: (response) => {
            
            this.toastr.success('Job updated successfully!', 'Job-Portal');
          },
          error: (err) => {
            this.toastr.error('Failed to update the job!', 'Job-Portal');
          },
        });
    }
  }
}
