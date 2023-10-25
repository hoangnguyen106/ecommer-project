import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { couponUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(private http: HttpClient) {}

  getAllCoupon() {
    return this.http.get(`${couponUrl}`);
  }

  createCoupon(data: any) {
    return this.http.post(`${couponUrl}`, data);
  }
}
