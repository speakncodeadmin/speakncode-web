import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { ContactComponent } from './contact/contact.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { ProductionSupportComponent } from './production-support/production-support.component';
import { InterviewPanelComponent } from './interview-panel/interview-panel.component';
import { ItConsultancyComponent } from './it-consultancy/it-consultancy.component';
import { TrainingComponent } from './training/training.component';
import { InterviewManagementComponent } from './interview-management/interview-management.component';
import { CompanyRegistrationComponent } from './interview-management/company-registration/company-registration.component';
import { HiringRequirementComponent } from './interview-management/hiring-requirement/hiring-requirement.component';
import { JobDescriptionComponent } from './interview-management/job-description/job-description.component';
import { CandidateResumeComponent } from './interview-management/candidate-resume/candidate-resume.component';
import { AssignInterviewerComponent } from './interview-management/assign-interviewer/assign-interviewer.component';
import { BookSlotComponent } from './interview-management/book-slot/book-slot.component';
import { ConductInterviewComponent } from './interview-management/conduct-interview/conduct-interview.component';
import { SubmitFeedbackComponent } from './interview-management/submit-feedback/submit-feedback.component';
import { GenerateResultComponent } from './interview-management/generate-result/generate-result.component';
import { ShareReportComponent } from './interview-management/share-report/share-report.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'software-development', component: SoftwareDevelopmentComponent },
  { path: 'production-support', component: ProductionSupportComponent },
  { path: 'interview-panel', component: InterviewPanelComponent },
  { path: 'it-consultancy', component: ItConsultancyComponent },
  { path: 'training', component: TrainingComponent },
  {
    path: 'interview-management',
    component: InterviewManagementComponent,
    children: [
      { path: '', redirectTo: 'company-registration', pathMatch: 'full' },
      { path: 'company-registration', component: CompanyRegistrationComponent },
      { path: 'hiring-requirement', component: HiringRequirementComponent },
      { path: 'job-description', component: JobDescriptionComponent },
      { path: 'candidate-resume', component: CandidateResumeComponent },
      { path: 'assign-interviewer', component: AssignInterviewerComponent },
      { path: 'book-slot', component: BookSlotComponent },
      { path: 'conduct-interview', component: ConductInterviewComponent },
      { path: 'submit-feedback', component: SubmitFeedbackComponent },
      { path: 'generate-result', component: GenerateResultComponent },
      { path: 'share-report', component: ShareReportComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
