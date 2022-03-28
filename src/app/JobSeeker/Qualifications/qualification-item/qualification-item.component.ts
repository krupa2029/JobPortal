import { Component, Input, OnInit } from '@angular/core';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-qualification-item',
  templateUrl: './qualification-item.component.html',
  styleUrls: ['./qualification-item.component.css']
})
export class QualificationItemComponent implements OnInit {

  @Input() qualificationData : any;
  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  onDelete(id: any): void {
    this.jobseekerService.deleteQualificationById(id).subscribe({
      next: (response) => {
        console.log(response);
        alert('Successfully Deleted');
        window.location.reload();
      },
      error: (err) => {        
        alert('Deletion Failed!!');
      },
    });
}
}