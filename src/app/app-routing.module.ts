import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployerProfileComponent } from './Employer/employer-profile/employer-profile.component';
import { EmployerComponent } from './Employer/employer/employer.component';
import { CreateNewVacancyComponent } from './Employer/Vacancy/create-new-vacancy/create-new-vacancy.component';
import { PostedVacanciesComponent } from './Employer/Vacancy/posted-vacancies/posted-vacancies.component';
import { UpdateVacancyComponent } from './Employer/Vacancy/update-vacancy/update-vacancy.component';
import { VacancyDetailComponent } from './Employer/Vacancy/vacancy-detail/vacancy-detail.component';
import { VacancyRequestsComponent } from './Employer/VacanyRequest/vacancy-requests/vacancy-requests.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { ExperienceFormComponent } from './JobSeeker/Experience/experience-form/experience-form.component';
import { ExperienceListComponent } from './JobSeeker/Experience/experience-list/experience-list.component';
import { JobSeekerComponent } from './JobSeeker/job-seeker/job-seeker.component';
import { MyJobsComponent } from './JobSeeker/MyJobs/my-jobs/my-jobs.component';
import { JobSeekerProfileComponent } from './JobSeeker/Profile/job-seeker-profile/job-seeker-profile.component';
import { QualificationFormComponent } from './JobSeeker/Qualifications/qualification-form/qualification-form.component';
import { QualificationListComponent } from './JobSeeker/Qualifications/qualification-list/qualification-list.component';
import { SearchJobsComponent } from './JobSeeker/SearchJobs/search-jobs/search-jobs.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ChangePasswordComponent } from './UserAccount/change-password/change-password.component';
import { LoginComponent } from './UserAccount/login/login.component';
import { RegisterComponent } from './UserAccount/register/register.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  {
    path:'employer', 
    component: EmployerComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path:'profile', component: EmployerProfileComponent
      },
      {
        path:'newVacancy', component: CreateNewVacancyComponent
      },
      {
        path:'postedVacancies', 
        children: [
          {
            path:'', component: PostedVacanciesComponent
          },
          {
            path:'vacancyRequests/:id', component: VacancyRequestsComponent
          },
          {
            path:'vacancyUpdate/:id', component: UpdateVacancyComponent
          },
        ]
      },
      {
        path:'vacancyDetail', component: VacancyDetailComponent
      },
      
     
    ],
  },

  {
    path:'jobseeker', 
    component: JobSeekerComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path:'profile', component: JobSeekerProfileComponent
      },
      {
        path:'addQualification', component: QualificationFormComponent
      },
      {
        path:'showQualification', component: QualificationListComponent
      },
      {
        path:'addExperience', component: ExperienceFormComponent
      },
      {
        path:'showExperience', component: ExperienceListComponent
      },
      {
        path:'searchJobs', component: SearchJobsComponent
      },
      {
        path:'myJobs', component: MyJobsComponent
      },
    
    ],
  },
 
  
  { path: 'changePassword', component: ChangePasswordComponent},
  { path: '**', pathMatch: 'full', 
        component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
