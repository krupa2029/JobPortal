import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { VacancyRequest } from 'src/app/_models/vacancy-request.model';
import { EmployerService } from 'src/app/_services/employer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-vacancy-request-item',
  templateUrl: './vacancy-request-item.component.html',
  styleUrls: ['./vacancy-request-item.component.css'],
  providers: [DatePipe]
})
export class VacancyRequestItemComponent implements OnInit {

  @Input() vacReqData : any;
  reqVacData: any;
 
  appliedDate: any;
  appliedDate_Req: any;

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.appliedDate = new Date(this.vacReqData.appliedDate).toLocaleDateString();
    console.log(this.vacReqData);

    
    this.appliedDate_Req = this.datepipe.transform(this.vacReqData.appliedDate, 'yyyy-MM-dd');
    this.reqVacData = this.vacReqData;
    // {
    //   this.reqVacData.vacancyId = this.vacReqData.vacancyId,
    //   this.reqVacData.jobSeekerEmail=  this.vacReqData.jobSeekerEmail,
    //   this.reqVacData.employerEmail=  this.vacReqData.employerEmail,
    //   this.reqVacData.companyName =  this.vacReqData.companyName,
    //   this.reqVacData.applicantFirstName =  this.vacReqData.applicantFirstName,
    //   this.reqVacData.applicantLastName =  this.vacReqData.applicantLastName,
    //   this.reqVacData.status = this.vacReqData.status,
    //   this.reqVacData.appliedDate =  this.appliedDate_Req,
    //   this.reqVacData.jobTitle = this.vacReqData.jobTitle
    // };
    
  }

  onProfile(): void{
    console.log("onProfile")
  }

  onAccept(reqId: any): void{

    this.reqVacData.status = 'accept';
    this.employerService.updateVacancyRequestById(reqId,this.reqVacData).subscribe({
      next: (response) => {
        console.log(response);
        alert("Successfully Accepted the Application");
      },
      error: (err) => {
       alert("Failed to Accept Application!!");
      },
    });
  }
  

  onReject(reqId: any): void{

    this.reqVacData.status = 'reject';
    this.employerService.updateVacancyRequestById(reqId,this.reqVacData).subscribe({
      next: (response) => {
        console.log(response);
        alert("Successfully Rejected the Application");
      },
      error: (err) => {
       alert("Unable to Fetch Data!!");
      },
    });
  }
}
