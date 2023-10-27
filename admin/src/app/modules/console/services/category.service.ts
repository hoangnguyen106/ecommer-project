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

  getCategoryById(id: any) {
    return this.http.get(`${categoryUrl}/${id}`);
  }

  updateCategory(id: any, data: any) {
    return this.http.put(`${categoryUrl}/${id}`, data);
  }

  deleteCategory(id: any) {
    return this.http.delete(`${categoryUrl}/${id}`);
  }
}
