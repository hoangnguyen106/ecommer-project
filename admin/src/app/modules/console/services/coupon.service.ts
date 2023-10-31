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

  getCouponById(id: any) {
    return this.http.get(`${couponUrl}/${id}`);
  }

  updateCoupon(id: any, data: any) {
    return this.http.put(`${couponUrl}/${id}`, data);
  }

  deleteCoupon(id: any) {
    return this.http.delete(`${couponUrl}/${id}`);
  }
}
