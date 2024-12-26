import { Component} from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  link: string = 'https://www.instagram.com/';
  phone: string= 'https://www.whatsapp.com/';

  constructor() { }

}
