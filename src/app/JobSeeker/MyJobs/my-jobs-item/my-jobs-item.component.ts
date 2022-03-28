import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-jobs-item',
  templateUrl: './my-jobs-item.component.html',
  styleUrls: ['./my-jobs-item.component.css'],
  providers: [DatePipe]
})
export class MyJobsItemComponent implements OnInit {
  @Input() myJobsData : any;
  applyDate : any;
  appliedDate: any;
  constructor( public datepipe: DatePipe ) { }

  ngOnInit(): void {
    this.applyDate= this.myJobsData.appliedDate;
    this.appliedDate = this.datepipe.transform(this.applyDate, 'dd/MM/yyyy');
  }

}
