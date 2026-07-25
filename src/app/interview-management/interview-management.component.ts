import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interview-management',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './interview-management.component.html',
  styleUrls: ['./interview-management.component.css']
})
export class InterviewManagementComponent {
  currentStep = 1;
  steps = [
    { id: 1, title: 'Company Registration', route: 'company-registration' },
    { id: 2, title: 'Hiring Requirement', route: 'hiring-requirement' },
    { id: 3, title: 'Job Description', route: 'job-description' },
    { id: 4, title: 'Candidate Resume', route: 'candidate-resume' },
    { id: 5, title: 'Assign Interviewer', route: 'assign-interviewer' },
    { id: 6, title: 'Book Interview Slot', route: 'book-slot' },
    { id: 7, title: 'Conduct Interview', route: 'conduct-interview' },
    { id: 8, title: 'Submit Feedback', route: 'submit-feedback' },
    { id: 9, title: 'Generate Result', route: 'generate-result' },
    { id: 10, title: 'Share Report', route: 'share-report' }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.updateCurrentStep();
  }

  updateCurrentStep(): void {
    const currentRoute = this.route.snapshot.firstChild?.url[0]?.path;
    const stepIndex = this.steps.findIndex(step => step.route === currentRoute);
    if (stepIndex !== -1) {
      this.currentStep = this.steps[stepIndex].id;
    }
  }

  navigateToStep(step: any): void {
    this.currentStep = step.id;
    this.router.navigate(['/interview-management', step.route]);
  }
}
