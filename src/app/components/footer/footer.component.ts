import {Component, Input } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input() phone: string = '';
  @Input() link: string = '';

  constructor() { }

}
