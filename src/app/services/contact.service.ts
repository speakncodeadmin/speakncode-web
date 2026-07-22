import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  submitContactForm(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, formData);
  }
}
