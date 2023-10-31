import { blogCategoryUrl } from './../../shared/utils/url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BcategoryService {
  constructor(private http: HttpClient) {}

  getAllBcategory() {
    return this.http.get(`${blogCategoryUrl}`);
  }

  createBCategory(data: any) {
    return this.http.post(`${blogCategoryUrl}`, data);
  }

  getBCategoryById(id: any) {
    return this.http.get(`${blogCategoryUrl}/${id}`);
  }

  updateBCategory(id: any, data: any) {
    return this.http.put(`${blogCategoryUrl}/${id}`, data);
  }

  deleteBCategory(id: any) {
    return this.http.delete(`${blogCategoryUrl}/${id}`);
  }
}
