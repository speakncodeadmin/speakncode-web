import { Component } from '@angular/core';
import { WorkflowStepComponent, FormSection } from '../workflow-step/workflow-step.component';

@Component({
  selector: 'app-generate-result',
  standalone: true,
  imports: [WorkflowStepComponent],
  templateUrl: './generate-result.component.html'
})
export class GenerateResultComponent {
  stepNumber = 9;
  stepTitle = 'Generate Result';
  stepDescription = 'Compile all feedback and generate comprehensive interview report';
  submitButtonText = 'Generate Report';
  
  sections: FormSection[] = [
    {
      title: 'Report Configuration',
      fields: [
        { name: 'reportType', label: 'Report Type', type: 'select', required: true, options: [
          { value: 'detailed', label: 'Detailed Report' },
          { value: 'summary', label: 'Summary Report' },
          { value: 'executive', label: 'Executive Summary' }
        ]},
        { name: 'includeScores', label: 'Include Scores', type: 'select', required: true, options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' }
        ]},
        { name: 'includeComments', label: 'Include Detailed Comments', type: 'select', required: true, options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' }
        ]}
      ]
    },
    {
      title: 'Report Sections',
      fields: [
        { name: 'sections', label: 'Include Sections', type: 'textarea', rows: 4, placeholder: 'Technical Assessment, Communication Skills, Problem Solving, Cultural Fit...' },
        { name: 'customNotes', label: 'Additional Notes for Report', type: 'textarea', rows: 3, placeholder: 'Any additional context or notes...' }
      ]
    },
    {
      title: 'Final Review',
      fields: [
        { name: 'reviewer', label: 'Reviewed By', type: 'text', required: true, placeholder: 'Manager Name' },
        { name: 'reviewDate', label: 'Review Date', type: 'text', required: true, placeholder: '2024-01-15' },
        { name: 'approval', label: 'Approval Status', type: 'select', required: true, options: [
          { value: 'approved', label: 'Approved' },
          { value: 'pending', label: 'Pending Review' },
          { value: 'needs-revision', label: 'Needs Revision' }
        ]}
      ]
    }
  ];
}
