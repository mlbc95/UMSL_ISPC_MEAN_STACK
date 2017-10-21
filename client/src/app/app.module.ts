import { LocalStorageService } from './services/local-storage.service';
import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms' 
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TodoInputComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
