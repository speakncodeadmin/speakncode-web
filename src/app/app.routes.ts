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
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
