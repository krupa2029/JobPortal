import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/_services/identity.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    id: null,
    fullName: null,
    userName: null,
    password: null,
    confirmPassword: null,
    email: null,
    phoneNumber: null,
    userType: null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private identityService: IdentityService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(data: any): void {
    console.log(data);

    if (data.password !== data.confirmPassword) {
      alert('Confirm Password should match Entered password');
    } else {
      this.identityService.register(data).subscribe({
        next: (response) => {
          console.log(response);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['login']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        },
      });
    }
  }
}
