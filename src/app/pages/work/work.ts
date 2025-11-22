import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AmatComponent } from './amat/amat';
import { AsmlComponent } from './asml/asml';
import { EducationComponent } from './education/education';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AmatComponent,
    AsmlComponent,
    EducationComponent,
  ],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class WorkComponent {
  activeSection: 'amat' | 'asml'| 'education' = 'amat';
  switchSection(section: 'amat' | 'asml' | 'education') {
    console.log('Switching section to:', section);
    this.activeSection = section;
  }
}
