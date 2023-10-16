import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blogCategoryUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class BcategoryService {
  constructor(private http: HttpClient) {}

  getAllBcategory() {
    return this.http.get(`${blogCategoryUrl}`);
  }
}
