import { Component, OnInit } from '@angular/core';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-qualification-list',
  templateUrl: './qualification-list.component.html',
  styleUrls: ['./qualification-list.component.css']
})
export class QualificationListComponent implements OnInit {

  quaData: any = [];
  userEmail = this.tokenStorage.getUser().email;

  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.jobseekerService.getQualificationByEmail(this.userEmail).subscribe({
      next: (response) => {
        this.quaData = response;
        // console.log(this.quaData);
      },
      error: (err) => {
        console.log(err);
        alert('Could not fetch data');
      },
    });
  }

}
