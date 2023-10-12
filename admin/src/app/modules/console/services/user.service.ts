import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get(`${authUrl}/all-users`);
  }
}
