import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enquiryUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class EnquiryService {
  constructor(private http: HttpClient) {}

  getAllEnquiry() {
    return this.http.get(`${enquiryUrl}`);
  }
}
