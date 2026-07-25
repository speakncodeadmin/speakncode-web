import { Component } from '@angular/core';
import { WorkflowStepComponent, FormSection } from '../workflow-step/workflow-step.component';

@Component({
  selector: 'app-conduct-interview',
  standalone: true,
  imports: [WorkflowStepComponent],
  templateUrl: './conduct-interview.component.html'
})
export class ConductInterviewComponent {
  stepNumber = 7;
  stepTitle = 'Conduct Interview';
  stepDescription = 'Record interview details, questions asked, and candidate responses';
  submitButtonText = 'Save Interview Notes';
  
  sections: FormSection[] = [
    {
      title: 'Interview Details',
      fields: [
        { name: 'interviewDate', label: 'Interview Date', type: 'text', required: true, placeholder: '2024-01-15' },
        { name: 'interviewer', label: 'Interviewer', type: 'text', required: true, placeholder: 'Dr. Sarah Johnson' },
        { name: 'candidate', label: 'Candidate', type: 'text', required: true, placeholder: 'John Doe' },
        { name: 'duration', label: 'Actual Duration', type: 'text', required: true, placeholder: '55 minutes' }
      ]
    },
    {
      title: 'Questions Asked',
      fields: [
        { name: 'technicalQuestions', label: 'Technical Questions', type: 'textarea', rows: 4, placeholder: 'List technical questions asked...' },
        { name: 'behavioralQuestions', label: 'Behavioral Questions', type: 'textarea', rows: 3, placeholder: 'List behavioral questions asked...' },
        { name: 'codingChallenges', label: 'Coding Challenges', type: 'textarea', rows: 3, placeholder: 'Describe coding challenges given...' }
      ]
    },
    {
      title: 'Candidate Responses',
      fields: [
        { name: 'strengths', label: 'Observed Strengths', type: 'textarea', rows: 3, placeholder: 'Strong areas observed...' },
        { name: 'weaknesses', label: 'Areas for Improvement', type: 'textarea', rows: 3, placeholder: 'Areas that need improvement...' },
        { name: 'overallImpression', label: 'Overall Impression', type: 'select', required: true, options: [
          { value: 'excellent', label: 'Excellent' },
          { value: 'good', label: 'Good' },
          { value: 'average', label: 'Average' },
          { value: 'below-average', label: 'Below Average' },
          { value: 'poor', label: 'Poor' }
        ]}
      ]
    }
  ];
}
