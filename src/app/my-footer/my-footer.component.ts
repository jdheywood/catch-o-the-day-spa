import { Component, Input } from '@angular/core';
import { DailyCatch } from '../daily-catch';

@Component({
  selector: 'app-my-footer',
  templateUrl: 'my-footer.component.html',
  styleUrls: ['my-footer.component.css']
})
export class MyFooterComponent {

  @Input()
  dailyCatch: DailyCatch;

  constructor() {
  }

}
