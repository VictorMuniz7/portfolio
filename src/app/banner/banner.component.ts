import { Component, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Output() scrollToContactEvent = new EventEmitter<void>()

  scroll(){
    this.scrollToContactEvent.emit();
  }
}
