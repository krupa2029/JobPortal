import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.css'],
})
export class JobSeekerComponent implements OnInit {

  userEmail = this.tokenStorage.getUser().email;
  username = this.tokenStorage.getUser().username;
  jskData: any = '';
  update : boolean = false;

  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  
    this.router.navigate(['jobseeker/searchJobs'])
 
    this.jobseekerService.getJobSeekerByEmail(this.userEmail).subscribe({
      next: (response) => {
        this.jskData = response;
        this.tokenStorage.saveJobseeker(this.jskData);
        console.log(this.jskData);

        if (this.jskData.length > 0) {
              this.update = true;
        }
      },
      error: (err) => {
        this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
        // alert('Unable to fetch Data!!');
      },
    });
  }
}
