import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/_services/employer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-posted-vacancy-item',
  templateUrl: './posted-vacancy-item.component.html',
  styleUrls: ['./posted-vacancy-item.component.css'],
  providers: [DatePipe],
})
export class PostedVacancyItemComponent implements OnInit {
  showDetail: boolean = false;
  @Input() vacancy: any;
  pdate: any = '';
  ldate: any = '';
  vacReq: any;
  dlt_msg = 'Are you sure you want to delete this posted job?';

  constructor(
    private employerService: EmployerService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.pdate = this.datepipe.transform(
      this.vacancy.publishedDate,
      'dd/MM/yyyy'
    );
    this.ldate = this.datepipe.transform(
      this.vacancy.lastDate,
      'dd/MM/yyyy'
    );
  }

  onDetail(): void {
    if (this.showDetail) {
      this.showDetail = false;
    } else {
      this.showDetail = true;
    }
  }

  onUpdate(data: any): void {}

  onDelete(id: any): void {
    this.employerService.deleteVacancyById(id).subscribe({
      next: (response) => {
        this.toastr.success('Job successfully deleted!', 'Job-Portal');
        window.location.reload();
      },
      error: (err) => {
        this.toastr.error('Failed to delete the job!', 'Job-Portal');
      },
    });
  }

  onRequest(id: any): void {
    this.employerService.getVacancyRequestByVacancyId(id).subscribe({
      next: (response) => {
        this.vacReq = response;
      },
      error: (err) => {
        this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
      },
    });
  }

  closeResult = '';

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
