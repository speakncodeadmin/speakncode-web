import { Component } from '@angular/core';
import { WorkflowStepComponent, FormSection } from '../workflow-step/workflow-step.component';

@Component({
  selector: 'app-assign-interviewer',
  standalone: true,
  imports: [WorkflowStepComponent],
  templateUrl: './assign-interviewer.component.html'
})
export class AssignInterviewerComponent {
  stepNumber = 5;
  stepTitle = 'Assign Interviewer';
  stepDescription = 'Assign expert interviewers based on technical domain and role requirements';
  submitButtonText = 'Assign Interviewer';
  
  sections: FormSection[] = [
    {
      title: 'Interviewer Selection',
      fields: [
        { name: 'interviewerName', label: 'Interviewer Name', type: 'select', required: true, options: [
          { value: 'expert1', label: 'Dr. Sarah Johnson - Frontend Expert' },
          { value: 'expert2', label: 'Michael Chen - Backend Expert' },
          { value: 'expert3', label: 'Emily Rodriguez - Full Stack Expert' },
          { value: 'expert4', label: 'David Kim - DevOps Expert' },
          { value: 'expert5', label: 'Lisa Wang - Data Engineering Expert' }
        ]},
        { name: 'interviewType', label: 'Interview Type', type: 'select', required: true, options: [
          { value: 'technical', label: 'Technical Interview' },
          { value: 'system-design', label: 'System Design' },
          { value: 'coding', label: 'Coding Challenge' },
          { value: 'behavioral', label: 'Behavioral Interview' },
          { value: 'comprehensive', label: 'Comprehensive Assessment' }
        ]},
        { name: 'interviewDuration', label: 'Duration', type: 'select', required: true, options: [
          { value: '30', label: '30 minutes' },
          { value: '45', label: '45 minutes' },
          { value: '60', label: '60 minutes' },
          { value: '90', label: '90 minutes' }
        ]}
      ]
    },
    {
      title: 'Interview Focus Areas',
      fields: [
        { name: 'focusAreas', label: 'Focus Areas', type: 'textarea', rows: 4, placeholder: 'React, TypeScript, State Management, API Integration...' },
        { name: 'specialInstructions', label: 'Special Instructions', type: 'textarea', rows: 3, placeholder: 'Any specific areas to focus on or avoid...' }
      ]
    }
  ];
}
