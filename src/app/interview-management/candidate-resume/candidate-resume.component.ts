import { Component } from '@angular/core';
import { WorkflowStepComponent, FormSection } from '../workflow-step/workflow-step.component';

@Component({
  selector: 'app-candidate-resume',
  standalone: true,
  imports: [WorkflowStepComponent],
  templateUrl: './candidate-resume.component.html'
})
export class CandidateResumeComponent {
  stepNumber = 4;
  stepTitle = 'Upload Candidate Resume';
  stepDescription = 'Upload candidate resumes for screening and interview scheduling';
  submitButtonText = 'Upload Resumes';
  
  sections: FormSection[] = [
    {
      title: 'Candidate Information',
      fields: [
        { name: 'candidateName', label: 'Candidate Name', type: 'text', required: true, placeholder: 'John Doe' },
        { name: 'candidateEmail', label: 'Email', type: 'email', required: true, placeholder: 'john@example.com' },
        { name: 'candidatePhone', label: 'Phone', type: 'tel', required: true, placeholder: '+91 9685794540' }
      ]
    },
    {
      title: 'Resume Upload',
      fields: [
        { name: 'resumeFile', label: 'Upload Resume', type: 'file', required: true, placeholder: 'Upload PDF resume' },
        { name: 'portfolioLink', label: 'Portfolio/GitHub Link', type: 'url', placeholder: 'https://github.com/username' },
        { name: 'linkedinProfile', label: 'LinkedIn Profile', type: 'url', placeholder: 'https://linkedin.com/in/username' }
      ]
    },
    {
      title: 'Additional Details',
      fields: [
        { name: 'currentCompany', label: 'Current Company', type: 'text', placeholder: 'Current employer' },
        { name: 'currentRole', label: 'Current Role', type: 'text', placeholder: 'Current position' },
        { name: 'expectedSalary', label: 'Expected Salary', type: 'text', placeholder: 'Annual salary expectation' },
        { name: 'noticePeriod', label: 'Notice Period', type: 'select', options: [
          { value: 'immediate', label: 'Immediate' },
          { value: '15-days', label: '15 days' },
          { value: '30-days', label: '30 days' },
          { value: '60-days', label: '60 days' },
          { value: '90-days', label: '90 days' }
        ]}
      ]
    }
  ];
}
