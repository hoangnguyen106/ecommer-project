import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enquiryUrl } from '../../shared/utils/url';
import { Enquiry } from '../models/enquiry';

@Injectable({
  providedIn: 'root',
})
export class EnquiryService {
  constructor(private http: HttpClient) {}

  getAllEnquiry() {
    return this.http.get(`${enquiryUrl}`);
  }

  createEnquiry(data: any) {
    return this.http.post(`${enquiryUrl}`, data);
  }

  getEnquiryById(id: any) {
    return this.http.get(`${enquiryUrl}/${id}`);
  }

  updateEnquiry(id: any, data: any) {
    return this.http.put(`${enquiryUrl}/${id}`, data);
  }

  deleteEnquiry(id: any) {
    return this.http.delete(`${enquiryUrl}/${id}`);
  }
}
