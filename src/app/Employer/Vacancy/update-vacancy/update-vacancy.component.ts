import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/_services/employer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-update-vacancy',
  templateUrl: './update-vacancy.component.html',
  styleUrls: ['./update-vacancy.component.css'],
})
export class UpdateVacancyComponent implements OnInit {

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
    maxSalary: null
  };

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.data = history.state
    console.log(this.data);
  }

  onSubmit(result: any): void {
    console.log(result);

    this.employerService.updateVacancyById(this.data.jobId , result).subscribe({
      next: (response) => {
        console.log(response);
        
        alert('Successfully Updated');
        // this.router.navigate(['login']);
      },
      error: (err) => {
        // this.errorMessage = err.message;
        alert('Job Update Failed!!');
      
      },
    });
  }
}
