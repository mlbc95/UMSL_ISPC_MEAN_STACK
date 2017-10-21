import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  public todoItem: string;
  // public todoItem: Todo;
  public content: string = '';

  // @Output() todoAdded: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  onAddTodoClick() {
    console.log('Input', this.todoItem);
    this.todoService.addTodoItem(this.todoItem).subscribe(
      data =>  console.log(data)
    );
    this.todoItem = '';
  }
 
  // onAddTodoClick() { //Implement Model
  //   console.log(this.content);
  //   let newTodoItem: Todo = {
  //     content: this.content
  //   }
  //   this.todoService.addTodoItem(newTodoItem).subscribe(
  //     (data: any): void => {
  //       console.log(data);
  //     }
  //   );
  //   this.content = ''; 
  //   this.todoAdded.emit();
  // }
}
