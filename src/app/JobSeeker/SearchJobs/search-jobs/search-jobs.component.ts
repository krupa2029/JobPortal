import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/_services/employer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

const VAC_API = 'https://localhost:5021/VacancyDetail';
@Component({
  selector: 'app-search-jobs',
  templateUrl: './search-jobs.component.html',
  styleUrls: ['./search-jobs.component.css'],
})
export class SearchJobsComponent implements OnInit {
  jobSeekerEmail = this.tokenStorage.getUser().email;
  data: any;
  vacancyData: any;
  totalRecords: number = 0;
  searchedKeyword: any;
  order: string = 'dsc';
  pageSize = 5;
  pageIndex = 1;
  applyStatus: boolean = false;
  vacDataByJobSeekerEmail: any;

  form: any = {
    minSalary: null,
    maxSalary: null,
  };

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.employerService
      .getAllVacancies(this.order, this.pageSize, this.pageIndex)
      .subscribe({
        next: (response) => {
          this.vacancyData = response.vacancyDetailModel;
          this.totalRecords = response.totalItem;
      
          this.employerService
            .getVacancyRequestByJobSeekerEmail(this.jobSeekerEmail)
            .subscribe({
              next: (response) => {
                this.vacDataByJobSeekerEmail = response;

                for (let i = 0; i < this.vacancyData.length; i++) {
                  for (
                    let j = 0;
                    j < this.vacDataByJobSeekerEmail.length;
                    j++
                  ) {
                    if (
                      this.vacancyData[i].jobId ===
                      this.vacDataByJobSeekerEmail[j].vacancyId
                    ) {
                      this.vacancyData[i]['applied'] = true;
                    }
                  }
                }
  
              },
              error: (err) => {
                this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
              },
            });
        },
        error: (err) => {        
          this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
        },
      });
  }

  Order(order: any): void {
    this.order = order;
    this.employerService
      .getAllVacancies(this.order, this.pageSize, this.pageIndex)
      .subscribe({
        next: (response) => {
          this.vacancyData = response.vacancyDetailModel;
          this.totalRecords = response.totalItem;
        },
        error: (err) => {       
          this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
        },
      });
  }

  pageChange(event: any): void {
    this.pageIndex = event;
   
    this.employerService
      .getAllVacancies(this.order, this.pageSize, this.pageIndex)
      .subscribe({
        next: (response) => {
          this.vacancyData = response.vacancyDetailModel;
          this.totalRecords = response.totalItem;
        },
        error: (err) => {
          this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
        },
      });
  }

  selectPageSize(): void {
    this.pageIndex = 1;
    this.employerService
      .getAllVacancies(this.order, this.pageSize, this.pageIndex)
      .subscribe({
        next: (response) => {
          this.vacancyData = response.vacancyDetailModel;
          this.totalRecords = response.totalItem;
        },
        error: (err) => {
       
          this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
        },
      });
  }

 

  onSubmit(filterData: any): void {
    let url = VAC_API + '?';
    let filters: any = {};
  
    if (filterData?.jobType && filterData.jobType !== 'all') {
      filters.filterByJobType = filterData.jobType;
    }
    if (filterData?.minSalary) {
      filters.minSalary = filterData.minSalary;
    }
    if (filterData?.maxSalary) {
      filters.maxSalary = filterData.maxSalary;
    }

    if (Object.keys(filters).length > 0) {
      for (let [key, value] of Object.entries(filters)) {
        url += `${key}=${value}&`;
      }
    }
    url += `sortBy=${this.order}&pageSize=${this.pageSize}&pageIndex=${this.pageIndex}`;

    this.http.get(url).subscribe({
      next: (response) => {
        this.data = response;
        this.vacancyData = this.data.vacancyDetailModel;
        this.totalRecords = this.data.totalItem;
      },
      error: (err) => {
        this.toastr.error('Unable to fetch Data!!', 'Job-Portal');
      },
    });
  }
}
