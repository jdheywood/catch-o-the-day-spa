import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { Fish } from '../fish';
import { Landed } from '../landed';

@Component({
  selector: 'app-my-header',
  templateUrl: 'my-header.component.html',
  styleUrls: ['my-header.component.css']
})
export class MyHeaderComponent {

  selectedFish: Fish;
  newTodo: Todo = new Todo();
  newLanded: Landed = new Landed();

  @Input()
  fish: Fish[];

  @Output()
  //add: EventEmitter<Todo> = new EventEmitter();
  add: EventEmitter<Landed> = new EventEmitter();

  constructor() {
  }

  changeFish(value) {
    this.selectedFish = value;
    console.log(this.selectedFish);
    console.log(this.newLanded);
  }

  /*addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }*/

  addLanded() {
    this.add.emit(this.newLanded);
    console.log(this.newLanded);
    this.newLanded = new Landed();
  }

}
