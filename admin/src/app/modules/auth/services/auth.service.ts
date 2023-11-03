import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { authUrl } from '../../shared/utils/url';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  // Đăng nhập
  siginIn(user: User) {
    return this.http.post<any>(`${authUrl}/admin-login`, user);
  }

  // Check loggin
  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('admin');
    if (authToken == null) {
      return false;
    } else {
      return true;
    }
  }

  // Get token
  getToken() {
    return localStorage.getItem('admin');
  }

  // Logout user
  doLogout() {
    let removeToken = localStorage.removeItem('admin');
    if (removeToken == null) {
      this.router.navigate(['auth/login']);
    }
  }
}
