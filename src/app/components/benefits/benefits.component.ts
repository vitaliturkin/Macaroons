import {Component, Input } from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {

  @Input() advantage: AdvantageType = {
    title: '',
    description: ''
  };

  @Input() i: number = 0;

  constructor() { }

}
