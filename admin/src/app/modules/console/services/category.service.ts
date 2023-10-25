import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoryUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategory() {
    return this.http.get(`${categoryUrl}`);
  }

  createCategory(data: any) {
    return this.http.post(`${categoryUrl}`, data);
  }
}
