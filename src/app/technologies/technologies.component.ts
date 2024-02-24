import { Component } from '@angular/core';
import { HoverClassDirective } from '../directives/hover-class.directive';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [HoverClassDirective],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

}
