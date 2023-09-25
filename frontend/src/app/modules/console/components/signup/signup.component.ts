import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  REGEXP_EMAIL,
  REGEXP_NAME,
  REGEXP_PASSWORD,
} from 'src/app/modules/shared/constants/regexp';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  title = 'Register';

  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.signupForm = this.fb.group({
      firstname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEXP_NAME),
        ]),
      ],
      lastname: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEXP_NAME),
        ]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.pattern(REGEXP_EMAIL),
        ]),
      ],
      mobile: ['', Validators.compose([Validators.required])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(REGEXP_PASSWORD),
        ]),
      ],
    });
  }

  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      console.log(res);
      localStorage.setItem('customer', JSON.stringify(res));
      this.signupForm.reset();
      this.toastrService.success('Register new user suscessfully !!!');
      this.router.navigate(['console/login']);
    });
  }
}
