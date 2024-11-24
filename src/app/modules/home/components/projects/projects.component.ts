import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() pinnedRepos: any[] = [];
  @Input() userLogin?: string;

}
