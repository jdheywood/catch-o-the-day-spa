import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { DailyCatch } from '../daily-catch';

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
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
