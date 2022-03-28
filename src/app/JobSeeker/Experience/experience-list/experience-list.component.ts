import { Component, OnInit } from '@angular/core';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css'],
})
export class ExperienceListComponent implements OnInit {

  expData: any = [];
  userEmail = this.tokenStorage.getUser().email;
  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.jobseekerService.getExperienceByEmail(this.userEmail).subscribe({
      next: (response) => {
        this.expData = response;
        console.log(this.expData);
      },
      error: (err) => {
        console.log(err);
        alert('Could not fetch data');
      },
    });
  }
}
