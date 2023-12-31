import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { authUrl } from './../../shared/utils/url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headers } from '../../shared/utils/token';
import { Cart } from '../models/cart';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // Đăng nhập
  siginIn(user: User) {
    return this.http.post<any>(`${authUrl}/login`, user);
  }

  // Check loggin
  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('token');
    if (authToken == null) {
      return false;
    } else {
      return true;
    }
  }

  // Đăng ký
  signUp(user: User): Observable<any> {
    return this.http.post(`${authUrl}/register`, user);
  }

  // Forgot password token
  forgotPasswordToken(data: any) {
    console.log(data);
    return this.http.post(`${authUrl}/forgot-password-token`, data);
  }

  // Lấy ra danh sách yêu thích
  getUserWishList() {
    return this.http.get(`${authUrl}/wishlist`, { headers: headers });
  }

  // Thêm vào giỏ hàng
  addToCart(data: any) {
    return this.http.post<Cart>(`${authUrl}/cart`, data, { headers: headers });
  }

  // Lấy ra thông tin giỏ hàng
  getCart() {
    return this.http.get(`${authUrl}/cart`, { headers: headers });
  }

  // Xóa product khỏi giỏ hàng
  deleteProductFromCart(id: any) {
    return this.http.delete(`${authUrl}/delete-product-card/${id}`, {
      headers: headers,
    });
    // Cập nhật quantity trong giỏ hàng
  }
  updateProductFromCart(cartDetail: any) {
    return this.http.put(
      `${authUrl}/update-product-card/${cartDetail._id}/${cartDetail.quantity}`,
      cartDetail,
      {
        headers: headers,
      }
    );
  }

  // Thêm thông tin user thanh toán
  createCheckoutInf(data: any) {
    return this.http.post(`${authUrl}/cart/create-order`, data, {
      headers: headers,
    });
  }

  // Lấy thông tin user đã order
  getMyOrders() {
    return this.http.get(`${authUrl}/getmyorders`, { headers: headers });
  }

  // Cập nhật thông tin tài khoản
  updateProfile(user: User): Observable<User> {
    return this.http.put<User>(`${authUrl}/edit-user`, user, {
      headers: headers,
    });
  }
}
