import { Component, Input, OnInit } from '@angular/core';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  @Input() experienceData: any;
  constructor(
    private jobseekerService: JobseekerService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
  }
  
  onDelete(id: any): void {
    this.jobseekerService.deleteExperienceById(id).subscribe({
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
