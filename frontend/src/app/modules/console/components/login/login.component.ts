import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  signinForm: FormGroup;
  title = 'Login';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  loginUser() {
    this.authService.siginIn(this.signinForm.value).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.toastrService.success('Login successfully');
        this.router.navigate(['/console/home']);
      },
      error: (err) => {},
    });
  }
}
