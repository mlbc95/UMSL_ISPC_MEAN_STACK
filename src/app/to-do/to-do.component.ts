import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  toDo:string;
  toDoList:string[]=[];

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('toDoList')) ===null){
    
    }else{
  this.toDoList = JSON.parse(localStorage.getItem('toDoList'))
    }
  }
  addToList(){ 
    if(this.toDo==""|| !this.toDo)
      {
        window.alert("PLease Enter a valid To Do Item!")
      }else{
        this.toDoList.push(this.toDo);
        console.log(this.toDoList)
        this.toDo=""
      }


  }

  delete(index){
    this.toDoList.splice(index,1)
  }

  saveToDoList(){
    localStorage.setItem("toDoList",JSON.stringify(this.toDoList))
  }

 

}
