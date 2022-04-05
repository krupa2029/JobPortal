import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-job-seeker-profile',
  templateUrl: './job-seeker-profile.component.html',
  styleUrls: ['./job-seeker-profile.component.css'],
  providers: [DatePipe],
})
export class JobSeekerProfileComponent implements OnInit {
  jskData: any;
  editMode: boolean = false;
  update: boolean = false;
  dob: any;

  constructor(
    private tokenStorage: TokenStorageService,
    private modalService: NgbModal,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.jskData = this.tokenStorage.getJsk();
    if (this.jskData.length > 0) {
      this.update = true;
    }
    this.dob = this.datepipe.transform(
      this.jskData[0].dateOfBirth,
      'dd/MM/yyyy'
    );
  }

  OnEdit(): void {
    this.editMode = !this.editMode;
  }

  OnAddQualification(): void {}

  OnAddExperience(): void {}

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
