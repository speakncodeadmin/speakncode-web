import { Component } from '@angular/core';
import { WorkflowStepComponent, FormSection } from '../workflow-step/workflow-step.component';

@Component({
  selector: 'app-hiring-requirement',
  standalone: true,
  imports: [WorkflowStepComponent],
  templateUrl: './hiring-requirement.component.html'
})
export class HiringRequirementComponent {
  stepNumber = 2;
  stepTitle = 'Create Hiring Requirement';
  stepDescription = 'Define the role and requirements for the position you want to fill';
  submitButtonText = 'Create Requirement';
  
  sections: FormSection[] = [
    {
      title: 'Position Details',
      fields: [
        { name: 'jobTitle', label: 'Job Title', type: 'text', required: true, placeholder: 'Senior Software Engineer' },
        { name: 'department', label: 'Department', type: 'text', required: true, placeholder: 'Engineering' },
        { name: 'employmentType', label: 'Employment Type', type: 'select', required: true, options: [
          { value: 'full-time', label: 'Full-time' },
          { value: 'part-time', label: 'Part-time' },
          { value: 'contract', label: 'Contract' },
          { value: 'internship', label: 'Internship' }
        ]}
      ]
    },
    {
      title: 'Requirements',
      fields: [
        { name: 'experience', label: 'Experience Required', type: 'select', required: true, options: [
          { value: '0-2', label: '0-2 years' },
          { value: '2-5', label: '2-5 years' },
          { value: '5-10', label: '5-10 years' },
          { value: '10+', label: '10+ years' }
        ]},
        { name: 'positions', label: 'Number of Positions', type: 'number', required: true, placeholder: '5' },
        { name: 'budget', label: 'Budget Range (Annual)', type: 'text', required: true, placeholder: '$80,000 - $120,000' },
        { name: 'location', label: 'Location', type: 'select', required: true, options: [
          { value: 'onsite', label: 'On-site' },
          { value: 'remote', label: 'Remote' },
          { value: 'hybrid', label: 'Hybrid' }
        ]}
      ]
    },
    {
      title: 'Skills & Qualifications',
      fields: [
        { name: 'requiredSkills', label: 'Required Skills', type: 'textarea', required: true, rows: 4, placeholder: 'React, TypeScript, Node.js, AWS...' },
        { name: 'preferredSkills', label: 'Preferred Skills', type: 'textarea', rows: 3, placeholder: 'Kubernetes, GraphQL, Microservices...' },
        { name: 'education', label: 'Education Requirements', type: 'text', placeholder: 'Bachelor\'s in Computer Science or equivalent' }
      ]
    }
  ];
}
