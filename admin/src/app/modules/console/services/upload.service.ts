import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadImage(data: any) {
    return this.http.post(`${baseUrl}/upload`, data);
  }
}
