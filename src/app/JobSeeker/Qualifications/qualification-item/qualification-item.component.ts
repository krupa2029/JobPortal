import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-qualification-item',
  templateUrl: './qualification-item.component.html',
  styleUrls: ['./qualification-item.component.css'],
})
export class QualificationItemComponent implements OnInit {
  @Input() qualificationData: any;
  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  dlt_msg = "Are you sure you want to delete this qualification?";
  ngOnInit(): void {}

  onDelete(id: any): void {
    this.jobseekerService.deleteQualificationById(id).subscribe({
      next: (response) => {
        this.toastr.success(
          'Qualification deleted successfully..',
          'Job-Portal'
        );

        window.location.reload();
      },
      error: (err) => {
        this.toastr.error('Failed to delete qualification!', 'Job-Portal');
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
