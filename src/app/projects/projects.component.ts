import { Component } from '@angular/core';
import { HoverSrcDirective } from '../directives/hover-src.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HoverSrcDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
