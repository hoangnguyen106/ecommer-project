import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { colorUrl } from '../../shared/utils/url';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(private http: HttpClient) {}

  getAllColor() {
    return this.http.get(`${colorUrl}`);
  }

  createColor(data: any) {
    return this.http.post(`${colorUrl}`, data);
  }

  getColorById(id: any) {
    return this.http.get(`${colorUrl}/${id}`);
  }

  updateColor(id: any, data: any) {
    return this.http.put(`${colorUrl}/${id}`, data);
  }

  deleteColor(id: any) {
    return this.http.delete(`${colorUrl}/${id}`);
  }
}
