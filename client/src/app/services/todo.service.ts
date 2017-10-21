import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Todo } from '../models/todo';
import { LocalStorageService } from './local-storage.service';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class TodoService {

  // public todoList: Array<string> = [];
  // implementing model
  public todoList: Array<Todo> = [];
  public todo: Todo;
  public newTodoAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private localStorageService: LocalStorageService,
    private http: Http
  ) { }

  getTodoList(): Observable<any> {
    // this.todoList = this.localStorageService.fetchValueFromKey('todoList')
    //   ? this.localStorageService.fetchObjectValueFromKey('todoList')
    //   : [];
    // return this.todoList;
    return this.http.get('http://localhost:3000/todos')
      .map(
        (res: Response): Promise<any> => {
          return res.json();
        }
      )
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

  addTodoItem(newTodoItem: Todo): Observable<any> { //Implement Model
    // this.todoList.push(newTodoItem);
    // this.saveTodoList();
    let body = {
      content: newTodoItem.content
    }
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options: RequestOptions = new RequestOptions({ headers: headers });
    console.log(body);
    return this.http.post('http://localhost:3000/todos/add', body, options)
      .map(
        (res: Response): Promise<any> => {
          this.newTodoAdded.emit(res.json().todo);
          return res.json();
        }
      ); 
  }

  editTodoItem(editedContent: string, index: number) { //Implement Model
    this.todoList[index].content = editedContent;
    this.saveTodoList();
  }

}
