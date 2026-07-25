import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent {
  formData = {
    companyName: '',
    industry: '',
    companySize: '',
    website: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    primaryContactName: '',
    primaryContactEmail: '',
    primaryContactPhone: '',
    primaryContactRole: ''
  };
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  onSubmit(): void {
    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      setTimeout(() => {
        this.submitSuccess = false;
      }, 3000);
    }, 1500);
  }
}
