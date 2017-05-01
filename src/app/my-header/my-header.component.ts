import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fish } from '../fish';
import { Landed } from '../landed';

@Component({
  selector: 'app-my-header',
  templateUrl: 'my-header.component.html',
  styleUrls: ['my-header.component.css']
})
export class MyHeaderComponent {

  selectedFish: Fish;
  newLanded: Landed = new Landed();

  @Input()
  fish: Fish[];

  @Output()
  add: EventEmitter<Landed> = new EventEmitter();

  constructor() {}

  changeFish(value) {
    this.selectedFish = value;
  }

  addLanded() {
    this.add.emit(this.newLanded);
    this.newLanded = new Landed();
  }

}
