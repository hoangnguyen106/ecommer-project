import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productUrl } from '../../shared/utils/url';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(`${productUrl}`);
  }

  createProduct(data: any): Observable<Product> {
    return this.http.post<Product>(`${productUrl}`, data, {});
  }
}
