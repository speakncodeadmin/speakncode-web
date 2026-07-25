import { Component } from '@angular/core';
import { WorkflowStepComponent, FormSection } from '../workflow-step/workflow-step.component';

@Component({
  selector: 'app-job-description',
  standalone: true,
  imports: [WorkflowStepComponent],
  templateUrl: './job-description.component.html'
})
export class JobDescriptionComponent {
  stepNumber = 3;
  stepTitle = 'Upload Job Description';
  stepDescription = 'Upload or paste the detailed job description for the position';
  submitButtonText = 'Save Job Description';
  
  sections: FormSection[] = [
    {
      title: 'Job Description',
      fields: [
        { name: 'jdFile', label: 'Upload JD Document', type: 'file', required: true, placeholder: 'Upload PDF or Word document' },
        { name: 'jdText', label: 'Or Paste JD Text', type: 'textarea', rows: 8, placeholder: 'Paste job description here...' }
      ]
    },
    {
      title: 'Additional Information',
      fields: [
        { name: 'responsibilities', label: 'Key Responsibilities', type: 'textarea', rows: 4, placeholder: 'List key responsibilities...' },
        { name: 'benefits', label: 'Benefits & Perks', type: 'textarea', rows: 3, placeholder: 'Health insurance, 401k, remote work...' },
        { name: 'notes', label: 'Additional Notes', type: 'textarea', rows: 2, placeholder: 'Any additional information...' }
      ]
    }
  ];
}
