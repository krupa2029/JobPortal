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

  vacData: any = [];

  constructor(
    private employerService: EmployerService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    console.log(this.emailcreatedBy);

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
}
