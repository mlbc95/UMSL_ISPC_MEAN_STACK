import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:String;
  num1:number;
  num2:number;
  totalSum:number;
  isChecked: boolean;



  printName(){
    console.log(this.name);
  }

  addition()
  {
    this.totalSum = this.num1 + this.num2;
  }

  
}
