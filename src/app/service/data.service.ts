import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { status } from '../models/status.enum';
import { todo } from '../models/todo.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  mytodos: Array<todo>;

  constructor() {
    // private apiService: ApiService
    this.mytodos = [
      { id: 1, status: status.TODO, todo: 'Hey this is 1irst' },
      { id: 2, status: status.INPROGRESS, todo: 'Hey this is 2nd' },
      { id: 3, status: status.DONE, todo: 'Hey this is 35d' },
    ];
  }

  getAllTodos(): any {
    // Observable<Array<todo>>
    // return this.apiService.getAllTodos();
    console.log('called');
    return this.mytodos;
  }

  saveTodo(todos: string) {
    // return this.apiService.saveTodo(todo);
    let newId = this.mytodos.length + 1;
    let newTodo: todo = {
      id: newId,
      todo: todos,
      status: status.TODO,
    };
    this.mytodos.push(newTodo);
    console.log('saving');
    console.log(this.mytodos);
  }
  updateTodo(todo: todo) {
    // return this.apiService.updateTodo(todo);
  }

  deleteTodo(todo: todo) {
    // return this.apiService.deleteTodo(todo);
  }
}
