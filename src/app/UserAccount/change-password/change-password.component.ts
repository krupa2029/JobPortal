import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService } from 'src/app/_services/identity.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  errorMessage = '';
  role = '';

  form: any = {
    userName: null,
    password: null,
    newPassword: null,
  };
  constructor(
    private identityService: IdentityService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.role = this.tokenStorage.getUser().role;

    if (this.role == 'employer') {
      this.router.navigate(['employer']);
    } else if (this.role == 'jobseeker') {
      this.router.navigate(['jobseeker']);
    }
  }

  onSubmit(data: any): void {
    this.identityService.changePassword(data).subscribe({
      next: (response) => {
        console.log(data);

        if (response) {
          alert('Password Changed Successfully!!');
        }
        
        this.role = this.tokenStorage.getUser().role;

        if (this.role == 'employer') {
          this.router.navigate(['employer']);
        } else if (this.role == 'jobseeker') {
          this.router.navigate(['jobseeker']);
        }
      },
      error: (err) => {
        this.errorMessage = err.message;
      },
    });
  }
}
