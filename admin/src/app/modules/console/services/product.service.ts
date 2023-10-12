import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(`${productUrl}`);
  }
}
