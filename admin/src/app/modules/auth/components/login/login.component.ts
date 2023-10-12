import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
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
        localStorage.setItem('admin', res.token);

        setTimeout(() => {
          this.router.navigate(['/console/dashboard']);
        }, 1000);
      },
      error: (err) => {},
    });
  }
}
