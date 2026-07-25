import { Component } from '@angular/core';
import { WorkflowStepComponent, FormSection } from '../workflow-step/workflow-step.component';

@Component({
  selector: 'app-book-slot',
  standalone: true,
  imports: [WorkflowStepComponent],
  templateUrl: './book-slot.component.html'
})
export class BookSlotComponent {
  stepNumber = 6;
  stepTitle = 'Book Interview Slot';
  stepDescription = 'Schedule the interview at a convenient time for both parties';
  submitButtonText = 'Book Slot';
  
  sections: FormSection[] = [
    {
      title: 'Scheduling',
      fields: [
        { name: 'preferredDate', label: 'Preferred Date', type: 'text', required: true, placeholder: '2024-01-15' },
        { name: 'preferredTime', label: 'Preferred Time', type: 'select', required: true, options: [
          { value: '9-11', label: '9:00 AM - 11:00 AM' },
          { value: '11-1', label: '11:00 AM - 1:00 PM' },
          { value: '2-4', label: '2:00 PM - 4:00 PM' },
          { value: '4-6', label: '4:00 PM - 6:00 PM' }
        ]},
        { name: 'timezone', label: 'Timezone', type: 'select', required: true, options: [
          { value: 'ist', label: 'IST (Indian Standard Time)' },
          { value: 'est', label: 'EST (Eastern Standard Time)' },
          { value: 'pst', label: 'PST (Pacific Standard Time)' },
          { value: 'gmt', label: 'GMT (Greenwich Mean Time)' }
        ]}
      ]
    },
    {
      title: 'Alternative Options',
      fields: [
        { name: 'alternativeDate', label: 'Alternative Date', type: 'text', placeholder: '2024-01-16' },
        { name: 'alternativeTime', label: 'Alternative Time', type: 'select', options: [
          { value: '9-11', label: '9:00 AM - 11:00 AM' },
          { value: '11-1', label: '11:00 AM - 1:00 PM' },
          { value: '2-4', label: '2:00 PM - 4:00 PM' },
          { value: '4-6', label: '4:00 PM - 6:00 PM' }
        ]},
        { name: 'platform', label: 'Interview Platform', type: 'select', required: true, options: [
          { value: 'zoom', label: 'Zoom' },
          { value: 'google-meet', label: 'Google Meet' },
          { value: 'teams', label: 'Microsoft Teams' },
          { value: 'phone', label: 'Phone Call' }
        ]}
      ]
    },
    {
      title: 'Meeting Details',
      fields: [
        { name: 'meetingLink', label: 'Meeting Link', type: 'url', placeholder: 'https://zoom.us/j/123456789' },
        { name: 'meetingNotes', label: 'Meeting Notes', type: 'textarea', rows: 3, placeholder: 'Any special instructions for the meeting...' }
      ]
    }
  ];
}
