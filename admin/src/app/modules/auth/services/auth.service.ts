import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { authUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
}
