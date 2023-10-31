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

  createBlog(data: any) {
    return this.http.post(`${blogUrl}`, data);
  }

  getBlogById(id: any) {
    return this.http.get(`${blogUrl}/${id}`);
  }

  updateBlog(id: any, data: any) {
    return this.http.put(`${blogUrl}/${id}`, data);
  }

  deleteBlog(id: any) {
    return this.http.delete(`${blogUrl}/${id}`);
  }
}
