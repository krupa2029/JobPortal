import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { LoginComponent } from './UserAccount/login/login.component';
import { RegisterComponent } from './UserAccount/register/register.component';

const routes: Routes = [

  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'user', component: BoardUserComponent },
  // { path: 'mod', component: BoardModeratorComponent },
  // { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
