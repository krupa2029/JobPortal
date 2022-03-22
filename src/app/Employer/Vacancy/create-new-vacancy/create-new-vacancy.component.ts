import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from 'src/app/_services/employer.service';
import { IdentityService } from 'src/app/_services/identity.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-create-new-vacancy',
  templateUrl: './create-new-vacancy.component.html',
  styleUrls: ['./create-new-vacancy.component.css']
})
export class CreateNewVacancyComponent implements OnInit {

  empData = this.tokenStorage.getEmp();
  

  form: any = {
    publisherEmail: this.empData[0].createdBy,
    jobTitle: null,
    companyName:  this.empData[0].organizationName,
    publishedDate: null,
    noOfVacancies: null,
    minimumQualification: null,
    jobDescription: null,
    experienceRequired: null,
    lastDate: null,
    minSalary: null,
    maxSalary: null
  };

 
  errorMessage = '';

  constructor(
    private identityService: IdentityService,
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
   
    
  }

  onSubmit(data: any): void {
    console.log(data);

      this.employerService.createNewVacancy(data).subscribe({
        next: (response) => {
          console.log(response);
          alert('Job Successfully Created');
          // this.router.navigate(['login']);
        },
        error: (err) => {
          // this.errorMessage = err.message;
          alert('Job Creation Failed!!');
        },
      });
    }
    }
  

