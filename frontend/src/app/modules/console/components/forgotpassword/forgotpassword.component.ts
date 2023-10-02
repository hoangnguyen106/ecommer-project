import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  title = 'Forgot Pasword';

  email: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  sendResetEmail() {
    this.authService.forgotPasswordToken(this.email).subscribe((res) => {
      if (res) {
        this.toastrService.success('Forgot password sent to your email !!!');

        this.router.navigate(['console/reset-password/:token']);
      }
      console.log(this.email);
      console.log(res);
    });
  }
}
