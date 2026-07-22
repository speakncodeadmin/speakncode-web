import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  };
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(private contactService: ContactService) {}

  onSubmit(): void {
    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    this.contactService.submitContactForm(this.formData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitError = 'Failed to submit form. Please try again.';
        console.error('Form submission error:', error);
        // Auto-hide error message after 5 seconds
        setTimeout(() => {
          this.submitError = '';
        }, 5000);
      }
    });
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    };
  }

  dismissSuccess(): void {
    this.submitSuccess = false;
  }

  dismissError(): void {
    this.submitError = '';
  }
}
