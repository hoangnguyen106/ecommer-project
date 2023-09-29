import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  title = 'Forgot Pasword';

  email: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  sendResetEmail() {
    this.authService.forgotPasswordToken(this.email).subscribe((res) => {
      console.log(this.email);
      console.log(res);
    });
  }
}
