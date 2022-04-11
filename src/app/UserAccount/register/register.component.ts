import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  onSubmit(data: any): void {
    if (data.password !== data.confirmPassword) {
      this.toastr.warning(
        'Confirm Password should match Entered password!',
        'Job-Portal'
      );
    } else {
      this.identityService.register(data).subscribe({
        next: (response) => {
          this.isSuccessful = true;

          this.toastr.success(
            'Your account registered successfully!!',
            'Job-Portal'
          );
          this.isSignUpFailed = false;
          this.router.navigate(['login']);
        },
        error: (err) => {
          this.toastr.error('Failed to register your account!!', 'Job-Portal');
        },
      });
    }
  }
}
