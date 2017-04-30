import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {Fish} from './fish';
import {Landed} from './landed';
import {DailyCatch} from "./daily-catch";

@Injectable()
export class DataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  // types of fish the app supports, populate via code initially then wire up to API
  catfish: Fish = {id: 1, name: 'Catfish'};
  pike: Fish = {id: 2, name: 'Pike'};
  trout: Fish = {id: 3, name: 'Trout'};
  fish: Fish[] = [this.catfish, this.pike, this.trout];

  // Daily catch
  dailyCatch: DailyCatch;

  // Landed fish
  landed: Landed[] = [];

  constructor() {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): DataService {
    console.log('adding to do');

    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): DataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }


  // Simulate GET /fish
  getFish(): Fish[] {
    return this.fish;
  }

  // Simulate POST /catches
  createDailyCatch(landed: Landed): DailyCatch {
    this.dailyCatch = new DailyCatch();
    this.dailyCatch.weather = 'Sunny';
    this.dailyCatch.landed.push(landed);
    this.dailyCatch.day = '2017-04-30';
    return this.dailyCatch;
  }

  // Simulate PUT /catches
  updateDailyCatch(landed: Landed): DailyCatch {
    this.dailyCatch.landed.push(landed);
    return this.dailyCatch;
  }

  // Upsert of dailyCatch
  landFish(landed: Landed): DataService {
    console.log('landing fish');

    if (!!this.dailyCatch) {
      console.log('updating catch');
      this.updateDailyCatch(landed);
    } else {
      console.log('creating catch');
      this.createDailyCatch(landed);
    }
    console.log(this.dailyCatch);
    return this;
  }

}
