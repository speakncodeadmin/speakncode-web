import { Component } from '@angular/core';
import { WorkflowStepComponent, FormSection } from '../workflow-step/workflow-step.component';

@Component({
  selector: 'app-submit-feedback',
  standalone: true,
  imports: [WorkflowStepComponent],
  templateUrl: './submit-feedback.component.html'
})
export class SubmitFeedbackComponent {
  stepNumber = 8;
  stepTitle = 'Submit Feedback';
  stepDescription = 'Provide detailed feedback and recommendations for the candidate';
  submitButtonText = 'Submit Feedback';
  
  sections: FormSection[] = [
    {
      title: 'Technical Assessment',
      fields: [
        { name: 'technicalScore', label: 'Technical Score (1-10)', type: 'number', required: true, placeholder: '8' },
        { name: 'technicalFeedback', label: 'Technical Feedback', type: 'textarea', rows: 4, required: true, placeholder: 'Detailed technical assessment...' },
        { name: 'codeQuality', label: 'Code Quality', type: 'select', required: true, options: [
          { value: 'excellent', label: 'Excellent' },
          { value: 'good', label: 'Good' },
          { value: 'satisfactory', label: 'Satisfactory' },
          { value: 'needs-improvement', label: 'Needs Improvement' }
        ]}
      ]
    },
    {
      title: 'Communication & Soft Skills',
      fields: [
        { name: 'communicationScore', label: 'Communication Score (1-10)', type: 'number', required: true, placeholder: '7' },
        { name: 'communicationFeedback', label: 'Communication Feedback', type: 'textarea', rows: 3, placeholder: 'Communication style and clarity...' },
        { name: 'problemSolving', label: 'Problem Solving', type: 'select', required: true, options: [
          { value: 'excellent', label: 'Excellent' },
          { value: 'good', label: 'Good' },
          { value: 'satisfactory', label: 'Satisfactory' },
          { value: 'needs-improvement', label: 'Needs Improvement' }
        ]}
      ]
    },
    {
      title: 'Recommendation',
      fields: [
        { name: 'recommendation', label: 'Hiring Recommendation', type: 'select', required: true, options: [
          { value: 'strong-hire', label: 'Strong Hire' },
          { value: 'hire', label: 'Hire' },
          { value: 'maybe', label: 'Maybe (Consider for other roles)' },
          { value: 'no-hire', label: 'No Hire' }
        ]},
        { name: 'recommendationReason', label: 'Reason for Recommendation', type: 'textarea', rows: 4, required: true, placeholder: 'Explain your recommendation...' },
        { name: 'nextSteps', label: 'Suggested Next Steps', type: 'textarea', rows: 3, placeholder: 'Recommended follow-up actions...' }
      ]
    }
  ];
}
