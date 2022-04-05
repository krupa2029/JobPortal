import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/_services/employer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.css'],
})
export class MyJobsComponent implements OnInit {
  jobSeekerEmail = this.tokenStorage.getUser().email; 
  myJobs : any;
  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.employerService.getVacancyRequestByJobSeekerEmail(this.jobSeekerEmail).subscribe({
      next: (response) => {
        console.log(response);
        this.myJobs = response;
      },
      error: (err) => {
        this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
      },
    });
  }
}
