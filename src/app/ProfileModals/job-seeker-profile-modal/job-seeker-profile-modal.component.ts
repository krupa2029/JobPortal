import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-seeker-profile-modal',
  templateUrl: './job-seeker-profile-modal.component.html',
  styleUrls: ['./job-seeker-profile-modal.component.css'],
  providers: [DatePipe],
})
export class JobSeekerProfileModalComponent implements OnInit {
  @Input() jobseekerDetail: any;
  dob : any;
  constructor(
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.dob = this.datepipe.transform(
      this.jobseekerDetail[0].dateOfBirth,
      'dd-MM-yyyy'
    );
  }

}
