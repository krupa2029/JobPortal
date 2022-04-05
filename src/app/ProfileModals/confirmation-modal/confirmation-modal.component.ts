import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  @Input() msg : any;
  constructor() { }

  ngOnInit(): void {
  }

}
