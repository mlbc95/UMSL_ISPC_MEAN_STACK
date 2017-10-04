import { Injectable } from '@angular/core';

import { Todo } from '../models/todo';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class TodoService {

  // public todoList: Array<string> = [];
  // implementing model
  public todoList: Array<Todo> = [];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  getTodoList() {
    this.todoList = this.localStorageService.fetchValueFromKey('todoList')
                  ? this.localStorageService.fetchObjectValueFromKey('todoList')
                  : [];
    return this.todoList;
  }  

  saveTodoList() {
    this.localStorageService.saveObjectValueWithKey('todoList', this.todoList);
  }

  // addTodoItem(newTodoItem: string) {
  //   this.todoList.push(newTodoItem);
  //   this.saveTodoList();
  // }

  // editTodoItem(editedTodoItem: string, index: number) {
  //   this.todoList[index] = editedTodoItem;
  //   this.saveTodoList();
  // }

  deleteTodoItem(index: number) {
    this.todoList.splice(index, 1);
    this.saveTodoList();
  }

  addTodoItem(newTodoItem: Todo) { //Implement Model
    this.todoList.push(newTodoItem);
    this.saveTodoList();
  }

  editTodoItem(editedContent: string, index: number) { //Implement Model
    this.todoList[index].content = editedContent;
    this.saveTodoList();
  } 

}
