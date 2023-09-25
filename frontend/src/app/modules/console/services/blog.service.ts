import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blogUrl } from '../../shared/utils/url';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getAllBlogs() {
    return this.http.get<Blog[]>(blogUrl);
  }

  getBlogById(id: any) {
    return this.http.get<any>(`${blogUrl}/${id}`);
  }
}
