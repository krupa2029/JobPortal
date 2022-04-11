import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/_services/employer.service';
import { JobseekerService } from 'src/app/_services/jobseeker.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-vacancy-requests',
  templateUrl: './vacancy-requests.component.html',
  styleUrls: ['./vacancy-requests.component.css'],
})
export class VacancyRequestsComponent implements OnInit {
  vacancyReqData: any;
  id : any;
  empty : boolean = false;

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    private jobseekerService: JobseekerService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
     
    this.employerService.getVacancyRequestByVacancyId(this.id).subscribe({
      next: (response) => {
        console.log(response);
        this.vacancyReqData = response;
        if(response.length <= 0){
          this.empty = true;
        }
      },
      error: (err) => {
        this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
      },
    });
  }
}
