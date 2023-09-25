import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { contactUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  addContact(data: any) {
    return this.http.post<Contact>(contactUrl, data);
  }
}
