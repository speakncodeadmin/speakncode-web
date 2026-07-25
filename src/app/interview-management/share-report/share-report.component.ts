import { Component } from '@angular/core';
import { WorkflowStepComponent, FormSection } from '../workflow-step/workflow-step.component';

@Component({
  selector: 'app-share-report',
  standalone: true,
  imports: [WorkflowStepComponent],
  templateUrl: './share-report.component.html'
})
export class ShareReportComponent {
  stepNumber = 10;
  stepTitle = 'Share Report with Company';
  stepDescription = 'Share the final interview report with the hiring company';
  submitButtonText = 'Share Report';
  
  sections: FormSection[] = [
    {
      title: 'Recipient Information',
      fields: [
        { name: 'recipientEmail', label: 'Company Contact Email', type: 'email', required: true, placeholder: 'hr@company.com' },
        { name: 'recipientName', label: 'Contact Person Name', type: 'text', required: true, placeholder: 'John Smith' },
        { name: 'recipientRole', label: 'Contact Role', type: 'text', placeholder: 'HR Manager' }
      ]
    },
    {
      title: 'Sharing Options',
      fields: [
        { name: 'shareMethod', label: 'Share Method', type: 'select', required: true, options: [
          { value: 'email', label: 'Email' },
          { value: 'portal', label: 'Portal Access' },
          { value: 'both', label: 'Both Email and Portal' }
        ]},
        { name: 'format', label: 'Report Format', type: 'select', required: true, options: [
          { value: 'pdf', label: 'PDF' },
          { value: 'docx', label: 'Word Document' },
          { value: 'both', label: 'Both PDF and Word' }
        ]},
        { name: 'accessLevel', label: 'Access Level', type: 'select', required: true, options: [
          { value: 'view-only', label: 'View Only' },
          { value: 'download', label: 'Download Allowed' },
          { value: 'full', label: 'Full Access' }
        ]}
      ]
    },
    {
      title: 'Message & Follow-up',
      fields: [
        { name: 'message', label: 'Cover Message', type: 'textarea', rows: 4, placeholder: 'Please find the interview report attached...' },
        { name: 'followUpDate', label: 'Follow-up Date', type: 'text', placeholder: '2024-01-20' },
        { name: 'followUpNotes', label: 'Follow-up Notes', type: 'textarea', rows: 2, placeholder: 'Schedule follow-up call to discuss results...' }
      ]
    }
  ];
}
