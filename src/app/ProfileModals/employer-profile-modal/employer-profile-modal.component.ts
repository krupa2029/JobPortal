import { Component, Input, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/_services/employer.service';

@Component({
  selector: 'app-employer-profile-modal',
  templateUrl: './employer-profile-modal.component.html',
  styleUrls: ['./employer-profile-modal.component.css']
})
export class EmployerProfileModalComponent implements OnInit {

  @Input() employerDetail: any;

  empData: any = '';
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
