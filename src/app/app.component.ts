import {Component} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {

  constructor(
    private dataService: DataService
  ) {
  }

  onAddTodo(todo) {
    console.log('emitted event addToDo caught');
    this.dataService.addTodo(todo);
  }

  onAddLanded(landed) {
    console.log('emitted event landFish caught');
    this.dataService.landFish(landed);
  }

  onToggleTodoComplete(todo) {
    this.dataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo) {
    this.dataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.dataService.getAllTodos();
  }

  get fish() {
    return this.dataService.getFish();
  }

  get dailyCatches() {
    return this.dataService.getDailyCatch();
  }
}
