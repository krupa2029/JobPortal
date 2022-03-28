import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployerService } from 'src/app/_services/employer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const VAC_API = 'https://localhost:5021/VacancyDetail';
@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css']
})
export class SearchJobsComponent implements OnInit {

  data: any;
  vacancyData = [];
  // p: number = 1;
  totalRecords : number = 0;
  searchedKeyword: any;
  selectedSortBy: string = 'jobLocation';
  // reverse : boolean = false;
  order: string = 'dsc';
  pageSize = 5;
  pageIndex = 1;

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.employerService.getAllVacancies(this.order, this.pageSize, this.pageIndex).subscribe({
      next: (response) => {
        this.vacancyData = response.vacancyDetailModel;
        // console.log(this.vacancyData);
        this.totalRecords = response.totalItem;
      },
      error: (err) => {
        console.log(err);
        alert('Could not fetch data');
      },
    });
  }
 
    Sort(sortBy : any): void{
      this.selectedSortBy = sortBy;
    }
  
    Order(order : any): void{
      this.order = order;
      this.employerService.getAllVacancies(this.order, this.pageSize, this.pageIndex).subscribe({
        next: (response) => {
          this.vacancyData = response.vacancyDetailModel;
          this.totalRecords = response.totalItem;
        },
        error: (err) => {
          console.log(err);
          alert('Could not fetch data');
        },
      });

    }

    pageChange(event: any): void {
      this.pageIndex = event;
      this.employerService.getAllVacancies(this.order, this.pageSize, this.pageIndex).subscribe({
        next: (response) => {
          this.vacancyData = response.vacancyDetailModel;
          this.totalRecords = response.totalItem;
        },
        error: (err) => {
          console.log(err);
          alert('Could not fetch data');
        },
      });
    }

    FilterByJobType(jobtype : string): void {     
      if(jobtype !== 'all'){
        this.pageIndex = 1;
        this.http.get(VAC_API + `?filter=${jobtype}&sortBy=${this.order}&pageSize=${this.pageSize}&pageIndex=${this.pageIndex}`).subscribe({
          next: (response) => { 
            this.data = response;
            this.vacancyData = this.data.vacancyDetailModel;
            this.totalRecords = this.data.totalItem;
          
          },
          error: (err) => {
            console.log(err);
            alert('Could not fetch data');
          },
        });
      }
      else{
        this.employerService.getAllVacancies(this.order, this.pageSize, this.pageIndex).subscribe({
          next: (response) => {
            this.vacancyData = response.vacancyDetailModel;
            this.totalRecords = response.totalItem;
          },
          error: (err) => {
            console.log(err);
            alert('Could not fetch data');
          },
        });
      }
    }
}
