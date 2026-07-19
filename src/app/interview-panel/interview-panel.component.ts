import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-interview-panel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './interview-panel.component.html',
  styleUrls: ['./interview-panel.component.css']
})
export class InterviewPanelComponent {}
