import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  copyEmail(){
    navigator.clipboard.writeText('victormuniz.oliveira7@gmail.com')
  }

  copyPhone(){
    navigator.clipboard.writeText('+55 (18) 981709943')
  }
}
