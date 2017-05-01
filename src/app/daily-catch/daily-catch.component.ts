import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DailyCatch } from '../daily-catch';
import { Landed } from '../landed';

@Component(
  {
    selector: 'app-daily-catch',
    templateUrl: 'daily-catch.component.html',
    styleUrls: ['daily-catch.component.css']
  }
)
export class DailyCatchComponent {

  @Input()
  dailyCatch: DailyCatch;

  @Output()
  remove: EventEmitter<Landed> = new EventEmitter();

  @Output()
  toggleSold: EventEmitter<Landed> = new EventEmitter();

  constructor() {}

  onToggleLandedSold(landed: Landed) {
    this.toggleSold.emit(landed);
  }

  onRemoveLanded(landed: Landed) {
    this.remove.emit(landed);
  }

}
