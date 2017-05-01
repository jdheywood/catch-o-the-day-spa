import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Landed} from "../landed";

@Component({
  selector: 'app-landed',
  templateUrl: 'landed.component.html',
  styleUrls: ['landed.component.css']
})
export class LandedComponent {

  @Input()
  landed: Landed;

  @Output()
  remove: EventEmitter<Landed> = new EventEmitter();

  @Output()
  toggleSold: EventEmitter<Landed> = new EventEmitter();

  constructor() {}

  toggleLandedSold(landed: Landed) {
    this.toggleSold.emit(landed);
  }

  removeLanded(landed: Landed) {
    this.remove.emit(landed);
  }

}
