import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/_services/employer.service';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-vacancy-request-item',
  templateUrl: './vacancy-request-item.component.html',
  styleUrls: ['./vacancy-request-item.component.css'],
  providers: [DatePipe],
})
export class VacancyRequestItemComponent implements OnInit {
  @Input() vacReqData: any;
  reqVacData: any;

  jobseekerDetail: any;
  appliedDate: any;
  appliedDate_Req: any;
  jobseekerEmail: any;
  accept_msg = 'Are you sure you want to accept this application?';
  reject_msg = 'Are you sure you want to reject this application?';

  constructor(
    private employerService: EmployerService,
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService,
    public datepipe: DatePipe,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.vacReqData);
    this.appliedDate = new Date(
      this.vacReqData.appliedDate
    ).toLocaleDateString();

    this.appliedDate_Req = this.datepipe.transform(
      this.vacReqData.appliedDate,
      'dd-MM-yyyy'
    );
    this.reqVacData = this.vacReqData;
  }

  onAccept(reqId: any): void {
    this.reqVacData.status = 'accept';
    this.employerService
      .updateVacancyRequestById(reqId, this.reqVacData)
      .subscribe({
        next: (response) => {
          this.toastr.success(
            'Successfully accepted the application!',
            'Job-Portal'
          );
        },
        error: (err) => {
          this.toastr.error('Failed to Accept the Application!!');
        },
      });
  }

  onReject(reqId: any): void {
      this.reqVacData.status = 'reject';
      this.employerService
        .updateVacancyRequestById(reqId, this.reqVacData)
        .subscribe({
          next: (response) => {
            // console.log(response);
            this.toastr.success('Successfully rejected the application');
          },
          error: (err) => {
            this.toastr.error('Failed to reject the application!!');
          },
        });
    
  }

  closeResult = '';

  onViewProfile(jobseekerEmail: any, content: any): void {
    this.jobseekerService.getJobSeekerByEmail(jobseekerEmail).subscribe({
      next: (response) => {
        this.jobseekerDetail = response;
        console.log(this.jobseekerDetail);

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
        // console.log(err);
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



  open(content: any): void {
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
  }

  
}
