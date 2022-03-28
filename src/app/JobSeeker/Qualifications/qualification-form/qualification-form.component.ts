import { Component, OnInit } from '@angular/core';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-qualification-form',
  templateUrl: './qualification-form.component.html',
  styleUrls: ['./qualification-form.component.css']
})
export class QualificationFormComponent implements OnInit {
  userEmail = this.tokenStorage.getUser().email;
  form: any = {
    qualificationName: null,
    university: null,
    yearOfCompletion: null,
    grade: null,
    jobSeekerEmail: this.userEmail
  };
  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(data: any): void {
    console.log(data);

    
    this.jobseekerService.createNewQualification(data).subscribe({
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
