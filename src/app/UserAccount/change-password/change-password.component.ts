import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  requiredData: any

  form: any = {
    userName: null,
    oldPassword: null,
    newPassword: null,
  };
  constructor(
    private identityService: IdentityService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private toastr: ToastrService
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
    // console.log(data);
    if (data.newPassword !== data.confirmPassword) {
      this.toastr.warning('Confirm Password should match Entered password!', 'Job-Portal');
      // alert('Confirm Password should match Entered password');
    } else {
    this.requiredData = {
      userName : data.userName,
      oldPassword: data.oldPassword,
      newPassword: data.newPassword
    } 
    // console.log(this.requiredData);
    this.identityService.changePassword(this.requiredData).subscribe({
      next: (response) => {
        console.log(data);

        if (response) {
          this.toastr.success('Password Changed Successfully!', 'Job-Portal');
          // alert('Password Changed Successfully!!');
        }
        
        this.role = this.tokenStorage.getUser().role;

        if (this.role == 'employer') {
          this.router.navigate(['employer']);
        } else if (this.role == 'jobseeker') {
          this.router.navigate(['jobseeker']);
        }
      },
      error: (err) => {
        this.toastr.error('Password Change Failed!', 'Job-Portal');
        // alert("Password Change Failed!")
      },
    });
  }
}
}