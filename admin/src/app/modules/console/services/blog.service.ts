import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blogUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getAllBlog() {
    return this.http.get(`${blogUrl}`);
  }
}
