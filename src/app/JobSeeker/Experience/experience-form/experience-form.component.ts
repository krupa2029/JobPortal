import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    jobSeekerEmail: this.userEmail,
  };

  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  AddExperience(data: any): void {
    this.jobseekerService.createNewExperience(data).subscribe({
      next: (response) => {
        this.toastr.success('Experience created successfully..', 'Job-Portal');
      },
      error: (err) => {
        this.toastr.error('Failed to create new experience!', 'Job-Portal');
      },
    });
  }
}
