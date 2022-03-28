import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployerService } from 'src/app/_services/employer.service';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-vacancy-requests',
  templateUrl: './vacancy-requests.component.html',
  styleUrls: ['./vacancy-requests.component.css'],
})
export class VacancyRequestsComponent implements OnInit {
  vacancyReqData: any;
  id : any;

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    private jobseekerService: JobseekerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
     
    this.employerService.getVacancyRequestByVacancyId(this.id).subscribe({
      next: (response) => {
        this.vacancyReqData = response;
        // console.log(this.vacData);
        
      },
      error: (err) => {
        console.log(err);
        alert('Could not fetch data');
       
      },
    });
    // console.log(this.id);
  }
}
