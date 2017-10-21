import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todoList: Array<string>=[];
  private todoItem: string;
  private editClicked: boolean = false;

  //Implementing Model 
  // private todoList: Array<Todo> = [];
  // private todoItem: Todo;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    //this.getTodoList();
    this.todoService.getTodoList().subscribe(data=>{
      this.todoList = data.todos;
      console.log(data)
    })
    
    // console.log(this.todoList);
    // this.todoService.newTodoAdded.subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.todoList.push(data);
    //   }
    // )
  }

  onEditSubmit(editedTodo: string, index: number) {
    this.todoService.editTodoItem(editedTodo, index);
    this.editClicked = !this.editClicked;
  }

    onDeleteClick(index: number) {
      this.todoService.deleteTodoItem(index);
    }

    //  onEditSubmit(editedContent: string, index: number) { //Implement Model
    //    this.todoService.editTodoItem(editedContent, index);
    //    this.todoList[index].isEditing = !this.todoList[index].isEditing;
    //  }

     getTodoList() {
      this.todoService.getTodoList().subscribe(
        (data: any): void => {
          this.todoList = data.todos;
        }
      );
     }

}
