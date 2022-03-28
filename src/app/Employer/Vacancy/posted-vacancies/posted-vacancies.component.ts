import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/_services/employer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-posted-vacancies',
  templateUrl: './posted-vacancies.component.html',
  styleUrls: ['./posted-vacancies.component.css'],
})
export class PostedVacanciesComponent implements OnInit {
  emailcreatedBy = this.tokenStorage.getUser().email;
  pageSize = 2;
  pageIndex = 1;
  vacData: any = [];
  totalRecords : number = 0;
  order: string = 'dsc';

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    // console.log(this.emailcreatedBy);

    this.employerService.getVacancyByEmail(this.emailcreatedBy).subscribe({
      next: (response) => {
        this.vacData = response;
        console.log(this.vacData);
        
      },
      error: (err) => {
        console.log(err);
        alert('Could not fetch data');
       
      },
    });
  }

  
    pageChange(event: any): void {
      this.pageIndex = event;
      // this.employerService.getVacancyByEmail(this.order, this.pageSize, this.pageIndex).subscribe({
      //   next: (response) => {
      //     this.vacData = response.vacancyDetailModel;
      //     this.totalRecords = response.totalItem;
      //   },
      //   error: (err) => {
      //     console.log(err);
      //     alert('Could not fetch data');
      //   },
      // });
    }
}
