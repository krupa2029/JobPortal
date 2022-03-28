import { Component, OnInit } from '@angular/core';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css'],
})
export class ExperienceFormComponent implements OnInit {
  update: boolean = false;
  userEmail = this.tokenStorage.getUser().email;
  jskId = this.tokenStorage.getJsk().jobSeekerId;
  jskData: any;

  form: any = {
    companyName: null,
    startDate: null,
    endDate: null,
    companyUrl: null,
    designation: null,
    jobDescription: null,
    jobSeekerEmail: this.userEmail
  };

  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {}

  AddExperience(data: any): void {
    // console.log(data);

    this.jobseekerService.createNewExperience(data).subscribe({
      next: (response) => {
        // console.log(response);
       
        alert('Successfully Created!');
        
      },
      error: (err) => {
        // this.errorMessage = err.message;
        alert('Creation Failed!!');
      
      },
    });
  }
}
