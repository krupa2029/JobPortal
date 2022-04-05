import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-qualification-form',
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.css'],
})
export class QualificationFormComponent implements OnInit {
  userEmail = this.tokenStorage.getUser().email;
  form: any = {
    qualificationName: null,
    university: null,
    yearOfCompletion: null,
    grade: null,
    jobSeekerEmail: this.userEmail,
  };
  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(data: any): void {
    this.jobseekerService.createNewQualification(data).subscribe({
      next: (response) => {
        this.toastr.success(
          'Qualification created successfully..',
          'Job-Portal'
        );
      },
      error: (err) => {
        this.toastr.error('Failed to create qualification!', 'Job-Portal');
      },
    });
  }
}
