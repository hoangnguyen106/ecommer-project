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
}
