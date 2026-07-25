import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'url' | 'number' | 'select' | 'textarea' | 'file';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  rows?: number;
}

export interface FormSection {
  title: string;
  fields: FormField[];
}

@Component({
  selector: 'app-workflow-step',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workflow-step.component.html',
  styleUrls: ['./workflow-step.component.css']
})
export class WorkflowStepComponent {
  @Input() stepNumber!: number;
  @Input() stepTitle!: string;
  @Input() stepDescription!: string;
  @Input() sections!: FormSection[];
  @Input() submitButtonText = 'Submit';
  
  formData: any = {};
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  onSubmit(): void {
    this.isSubmitting = true;
    this.submitError = '';
    this.submitSuccess = false;

    // Simulate API call - replace with actual service call
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      console.log('Form submitted:', this.formData);
      setTimeout(() => {
        this.submitSuccess = false;
      }, 3000);
    }, 1500);
  }

  onFileChange(event: any, fieldName: string): void {
    if (event.target.files && event.target.files[0]) {
      this.formData[fieldName] = event.target.files[0];
    }
  }
}
