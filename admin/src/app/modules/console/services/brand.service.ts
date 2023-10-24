import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { brandUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  getAllBrand() {
    return this.http.get(`${brandUrl}`);
  }

  createBrand(data: any) {
    return this.http.post(`${brandUrl}`, data);
  }
}
