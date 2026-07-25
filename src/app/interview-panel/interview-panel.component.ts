import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-interview-panel',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './interview-panel.component.html',
  styleUrls: ['./interview-panel.component.css']
})
export class InterviewPanelComponent {
  formData = {
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    domain: '',
    candidates: '',
    timeline: '',
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

    const interviewRequest = {
      ...this.formData,
      type: 'interview-request'
    };

    this.contactService.submitContactForm(interviewRequest).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.resetForm();
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitError = 'Failed to submit request. Please try again.';
        console.error('Form submission error:', error);
        setTimeout(() => {
          this.submitError = '';
        }, 5000);
      }
    });
  }

  resetForm(): void {
    this.formData = {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      role: '',
      experience: '',
      domain: '',
      candidates: '',
      timeline: '',
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
