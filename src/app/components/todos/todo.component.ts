import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { status } from '../../models/status.enum';
import { todo } from '../../models/todo.model';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Array<todo>;
  todoValue = new FormControl('');
  snackbarMsg: String = 'Default snackbarMsg';
  snackbarElem: HTMLElement;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.todos = [
    //   { id: 1, status: status.TODO, todo: 'Hey this is first' },
    //   { id: 2, status: status.INPROGRESS, todo: 'Hey this is 2nd' },
    //   { id: 3, status: status.DONE, todo: 'Hey this is 3rd' },
    // ];

    this.getAllTodos();
    this.snackbarElem = document.getElementById('snackbar');
  }

  getColor(status) {
    // console.log(status);doesnt work

    switch (status) {
      case 0:
        return 'red';
      case 1:
        return 'blue';
      case 2:
        return 'green';
      default:
        return 'black';
    }
  }

  addTodo() {
    console.log('Add tdo');
    if (!!this.todoValue.value) {
      this.dataService.saveTodo(this.todoValue.value);
    }
    this.snackbarMsg = 'Adding a new Todo';

    this.snackbarTimer();
  }

  getAllTodos() {
    // this.dataService.getAllTodos().subscribe((res) => (this.todos = res));
    console.log('cal');
    this.todos = this.dataService.getAllTodos();
  }

  onProgress(updateTodo: todo) {
    //call api service to increat the status
    console.log('onprogress');
    this.snackbarMsg = 'Update progressTodo';
    this.snackbarTimer();
  }
  onDone(updateTodo: todo) {
    //call api service to make the status to done
    this.snackbarMsg = 'Marked as done';
    this.snackbarTimer();
  }

  snackbarTimer() {
    //change snackbar class to show
    this.snackbarElem.classList.add('show');
    setTimeout(() => {
      this.snackbarElem.classList.remove('show');
    }, 3000);
    clearTimeout();
  }
}
