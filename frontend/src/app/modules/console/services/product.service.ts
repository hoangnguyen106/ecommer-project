import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { productUrl } from '../../shared/utils/url';
import { headers } from '../../shared/utils/token';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(`${productUrl}`);
  }

  filterProducts(data: any) {
    return this.http.get(`${productUrl}/${data.brand}`);
  }

  getProductById(id: any) {
    return this.http.get<any>(`${productUrl}/${id}`);
  }

  addToWishList(prodId: any) {
    return this.http.put(
      `${productUrl}/wishlist`,
      { prodId },
      {
        headers: headers,
      }
    );
  }
  rateProduct(data: any) {
    return this.http.put(`${productUrl}/rating`, data, {
      headers: headers,
    });
  }
}
