import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  title = 'Profile';
  dataFromLocalStorage: any;
  editProfile!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.dataFromLocalStorage = JSON.parse(
      localStorage.getItem('user') || '{}'
    );

    this.editProfile = this.fb.group({
      firstname: [this.dataFromLocalStorage.firstname, Validators.required],
      lastname: [this.dataFromLocalStorage.lastname, Validators.required],
      email: [this.dataFromLocalStorage.email, Validators.required],
      mobile: [this.dataFromLocalStorage.mobile, Validators.required],
    });
    console.log(this.dataFromLocalStorage);
  }

  updateProfile() {
    this.authService.updateProfile(this.editProfile.value).subscribe((res) => {
      this.toastrService.success('Update profile successfully !!!');
      localStorage.setItem('user', JSON.stringify(res));
      console.log(res);
    });
  }
}
