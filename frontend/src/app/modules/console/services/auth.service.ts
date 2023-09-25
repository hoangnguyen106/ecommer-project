import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { authUrl } from './../../shared/utils/url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // Đăng nhập
  siginIn(user: User) {
    return this.http.post<any>(`${authUrl}/login`, user);
  }

  // Đăng ký
  signUp(user: User): Observable<any> {
    return this.http.post(`${authUrl}/register`, user);
  }

  // Lấy ra danh sách yêu thích
  getUserWishList() {
    return this.http.get(`${authUrl}/wishlist`);
  }

  // Thêm vào giỏ hàng
  addToCart(data: any) {
    return this.http.post<any>(`${authUrl}/cart`, data);
  }
}
