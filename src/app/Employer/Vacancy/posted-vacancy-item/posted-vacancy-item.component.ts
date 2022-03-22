import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmployerService } from 'src/app/_services/employer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-posted-vacancy-item',
  templateUrl: './posted-vacancy-item.component.html',
  styleUrls: ['./posted-vacancy-item.component.css'],
})
export class PostedVacancyItemComponent implements OnInit {
  showDetail: boolean = false;
  @Input() vacancy: any;
  pdate: any = '';
  ldate: any = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.pdate = new Date(this.vacancy.publishedDate).toLocaleDateString();
    console.log(this.pdate);
    this.ldate = new Date(this.vacancy.lastDate).toLocaleDateString();
    console.log(this.ldate);
  }

  onDetail(): void {
    if(this.showDetail){
      this.showDetail=false
    }else{
      this.showDetail=true
    }
    
  }

  onUpdate(data: any): void {
    this.router.navigateByUrl('employer/vacancyUpdate', {
      state: {
        jobId: data.jobId,
        publisherEmail: data.publisherEmail,
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        jobType: data.jobType,
        jobLocation: data.jobLocation,
        // publishedDate:  new Date(data.publishedDate).toLocaleDateString(),
        publishedDate: data.publishedDate,
        noOfVacancies: data.noOfVacancies,
        minimumQualification: data.minimumQualification,
        jobDescription: data.jobDescription,
        experienceRequired: data.experienceRequired,
        minSalary: data.minSalary,
        maxSalary: data.maxSalary,
        // lastDate:  new Date(data.lastDate).toLocaleDateString(),
        lastDate: data.lastDate,
      },
    });
  }

  onDelete(id: any): void {
    this.employerService.deleteVacancyById(id).subscribe({
      next: (response) => {
        console.log(response);
        alert('Job Successfully Deleted');
        window.location.reload();
      },
      error: (err) => {
        
        alert('Job Deletion Failed!!');
       
      },
    });
  }
}
