import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import {Landed} from "../landed";

@Component({
  selector: 'app-landed',
  templateUrl: 'landed.component.html',
  styleUrls: ['landed.component.css']
})
export class LandedComponent {

  @Input() // todo: Todo;
  landed: Landed;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
