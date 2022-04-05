import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { VacancyRequest } from 'src/app/_models/vacancy-request.model';
import { EmployerService } from 'src/app/_services/employer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-search-job-item',
  templateUrl: './search-job-item.component.html',
  styleUrls: ['./search-job-item.component.css'],
  providers: [DatePipe],
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
  applied: boolean = false;
  pdate: any = '';
  ldate: any = '';
  latest_date: any;
  result: any;
  findVac: any = null;
  employerDetail: any;

  userEmail = this.tokenStorage.getUser().email;

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    public datepipe: DatePipe,
    private modalService: NgbModal,
    private toastr: ToastrService,
    
  ) {}

  ngOnInit(): void {
    console.log(this.vacData);
    // this.pdate = new Date(this.vacData.publishedDate).toLocaleDateString();
    // this.ldate = new Date(this.vacData.lastDate).toLocaleDateString();

    this.pdate = this.datepipe.transform(
      this.vacData.publishedDate,
      'dd/MM/yyyy'
    );
    this.ldate = this.datepipe.transform(
      this.vacData.lastDate,
      'dd/MM/yyyy'
    );

    this.applyDate = new Date();
    this.latest_date = this.datepipe.transform(this.applyDate, 'yyyy-MM-dd');

    this.employerService
      .getVacancyRequestByJobSeekerEmail(this.jobSeekerEmail)
      .subscribe({
        next: (response) => {
          this.result = response;
          
        },
        error: (err) => {
          this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
        },
      });
  }
  onDetail(): void {
    if (this.showDetail) {
      this.showDetail = false;
    } else {
      this.showDetail = true;
    }
  }

  onApply(vacId: any, empEmail: any, compName: any, jobTitle: any): void {
    let text = "Are you sure you want to apply for this job?";
    if (confirm(text) == true) {

    this.reqVacData = new VacancyRequest();
    {
      (this.reqVacData.vacancyId = vacId),
        (this.reqVacData.jobSeekerEmail = this.jobSeekerEmail),
        (this.reqVacData.employerEmail = empEmail),
        (this.reqVacData.companyName = compName),
        (this.reqVacData.applicantFirstName = this.jobSeekerFirstName),
        (this.reqVacData.applicantLastName = this.jobSeekerLastName),
        (this.reqVacData.status = 'pending'),
        (this.reqVacData.appliedDate = this.latest_date);
      this.reqVacData.jobTitle = jobTitle;
    }

    this.applied = true;

    this.employerService.createNewVacancyRequest(this.reqVacData).subscribe({
      next: (response) => {
        this.toastr.success('Your application sent successfully!!', 'Job-Portal');
  
        window.location.reload();
      },
      error: (err) => {
        this.toastr.error('Failed to send application!!!!', 'Job-Portal');
       
      },
    });
  }
  }

  closeResult = '';

  open(employerEmail: any, content: any): void {
    
    this.employerService.getEmployerByEmail(employerEmail).subscribe({
      next: (response) => {
        this.employerDetail = response;
        console.log(this.employerDetail);

        this.modalService
          .open(content, { ariaLabelledBy: 'modal-basic-title' })
          .result.then(
            (result) => {
              this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
          );
      },
      error: (err) => {
       
        // alert('Unable to fetch Data!!');
        this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
      },
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
