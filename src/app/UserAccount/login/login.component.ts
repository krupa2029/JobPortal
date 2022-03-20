import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdentityService } from 'src/app/_services/identity.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string = '';
  response : any;

  constructor(
    private identityService: IdentityService,
    private tokenStorage: TokenStorageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().userType;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    this.identityService.login(username, password).subscribe({
      next: (data) => {
        console.log(data);
        this.tokenStorage.saveToken(data.tokenString);
      
        this.identityService.getByUserName(username).subscribe({
          next: (result) => {
          this.tokenStorage.saveUser({
            fullname: result.fullName,
            email: result.email,
            role: result.userType
          });
            // console.log(result);
          }
        })
        this.isLoginFailed = false;
        this.isLoggedIn = true;
    
        this.role = this.tokenStorage.getUser().role;

        if (this.role == 'employer') {
          this.router.navigate(['employer']);
        }

        else if (this.role == 'jobseeker') {
          this.router.navigate(['jobseeker']);
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }
  
}
