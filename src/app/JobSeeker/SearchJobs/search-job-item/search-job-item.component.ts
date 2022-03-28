import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { VacancyRequest } from 'src/app/_models/vacancy-request.model';
import { EmployerService } from 'src/app/_services/employer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-search-job-item',
  templateUrl: './search-job-item.component.html',
  styleUrls: ['./search-job-item.component.css'],
  providers: [DatePipe]
})
export class SearchJobItemComponent implements OnInit {

  @Input() vacData: any;

  jobSeekerEmail = this.tokenStorage.getUser().email;
  jskData = this.tokenStorage.getJsk();
  jobSeekerFirstName = this.jskData[0].firstName;
  jobSeekerLastName = this.jskData[0].lastName;
  reqVacData: any;
  applyDate: any;
  showDetail: boolean = false;
  applied : boolean = false;
  pdate: any = '';
  ldate: any = '';
  latest_date: any;

  userEmail = this.tokenStorage.getUser().email;
 

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    
    this.pdate = new Date(this.vacData.publishedDate).toLocaleDateString();
    // console.log(this.pdate);
    this.ldate = new Date(this.vacData.lastDate).toLocaleDateString();
    // console.log(this.ldate);

    this.applyDate=new Date();
    this.latest_date = this.datepipe.transform(this.applyDate, 'yyyy-MM-dd');
    // console.log(this.latest_date);
  }
  onDetail(): void {
    if(this.showDetail){
      this.showDetail=false
    }else{
      this.showDetail=true
    } 
  }

  onApply(vacId: any, empEmail: any, compName: any, jobTitle: any): void {

    this.reqVacData = new VacancyRequest();
    {
      this.reqVacData.vacancyId = vacId,
      this.reqVacData.jobSeekerEmail= this.jobSeekerEmail,
      this.reqVacData.employerEmail= empEmail,
      this.reqVacData.companyName = compName,
      this.reqVacData.applicantFirstName = this.jobSeekerFirstName,
      this.reqVacData.applicantLastName = this.jobSeekerLastName,
      this.reqVacData.status = "pending",
      this.reqVacData.appliedDate = this.latest_date
      this.reqVacData.jobTitle = jobTitle
    };
    
    console.log(compName);
    console.log(this.jobSeekerFirstName);
    console.log(this.jobSeekerLastName);
    // console.log(empEmail);

    this.applied=true;

    this.employerService.createNewVacancyRequest(this.reqVacData).subscribe({
      next: (response) => {
        console.log(response);
        alert('Your Application Sent Successfully!!');
      },
      error: (err) => {
        alert('Failed to send Application!!');
      },
    });

  }
}
