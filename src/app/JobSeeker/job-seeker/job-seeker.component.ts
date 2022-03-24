import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.css'],
})
export class JobSeekerComponent implements OnInit {

  userEmail = this.tokenStorage.getUser().email;
  jskData: any = '';

  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jobseekerService.getJobSeekerByEmail(this.userEmail).subscribe({
      next: (response) => {
        this.jskData = response;
        this.tokenStorage.saveJobseeker(this.jskData);
        console.log(this.jskData);
      },
      error: (err) => {
        console.log(err);
        alert('Unable to fetch Data!!');
        // this.isSignUpFailed = true;
      },
    });
  }
}
