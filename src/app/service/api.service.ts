import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiLink: string = 'http://localhost:8080/api/todo';

  constructor(private http: HttpClient) {}

  getAllTodos() {
    return this.http.get<Array<todo>>(this.apiLink);
  }

  deleteTodo(myTodo: todo) {
    return this.http.delete(`${this.apiLink}/${myTodo.id}`);
  }
  updateTodo(myTodo: todo): any {
    return this.http.put(
      `${this.apiLink}/${myTodo.id}?todo=${myTodo.id}`,
      myTodo
    );
  }
  saveTodo(todo: todo): any {
    return this.http.post(`${this.apiLink}/save`, todo);
  }
}
