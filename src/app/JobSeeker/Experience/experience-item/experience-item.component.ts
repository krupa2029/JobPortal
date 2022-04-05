import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css'],
  providers: [DatePipe],
})
export class ExperienceItemComponent implements OnInit {
  @Input() experienceData: any;

  startDate: any;
  endDate: any;
  dlt_msg = "Are you sure you want to delete this experience?";

  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.startDate = this.datepipe.transform(
      this.experienceData.startDate,
      'MM/yyyy'
    );

    this.endDate = this.datepipe.transform(
      this.experienceData.endDate,
      'MM/yyyy'
    );
  }

  onDelete(id: any): void {
      this.jobseekerService.deleteExperienceById(id).subscribe({
        next: (response) => {
          this.toastr.success('Experience deleted successfully..', 'Job-Portal');
          window.location.reload();
        },
        error: (err) => {
          this.toastr.error('Failed to delete the experience!', 'Job-Portal'); 
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

