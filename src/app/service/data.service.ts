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

  getAllTodos(): any { // Observable<Array<todo>>
    // return this.apiService.getAllTodos();
    console.log("called")
    return this.mytodos;
  }

  saveTodo(todo: todo) {
    // return this.apiService.saveTodo(todo);

    console.log("saving")
  }
  updateTodo(todo: todo) {
    // return this.apiService.updateTodo(todo);
  }

  deleteTodo(todo: todo) {
    // return this.apiService.deleteTodo(todo);
  }
}
