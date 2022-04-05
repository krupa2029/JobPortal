import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService
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
            this.role = result.userType;
            this.tokenStorage.saveUser({
            fullname: result.fullName,
            email: result.email,
            role: result.userType,
            username: result.userName
          });
            console.log(result);
          }
        })
        this.isLoginFailed = false;
        this.isLoggedIn = true;
    

        if (this.role == 'employer') {
          this.router.navigate(['employer']);
        }

        else if (this.role == 'jobseeker') {
          this.router.navigate(['jobseeker']);
        }
        
      },
      error: (err) => {
        this.toastr.error('Login Failed! Username or Password is not valid!', 'Job-Portal');
        // this.errorMessage = err.message;
        // this.isLoginFailed = true;
      },
    });
  }
  
}
