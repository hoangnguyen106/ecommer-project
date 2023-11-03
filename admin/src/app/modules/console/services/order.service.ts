import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getAllOrder() {
    return this.http.get(`${authUrl}/getallorders`, { headers: this.headers });
  }

  getOrder(id: any) {
    return this.http.get(`${authUrl}//getorderbyuser/${id}`, {
      headers: this.headers,
    });
  }
}
