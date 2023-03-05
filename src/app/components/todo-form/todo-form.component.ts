import { Component } from '@angular/core';
import { Todo } from 'src/app/model/Todo';

import {v4 as uuidv4} from "uuid";
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todoTitle! : string;
  constructor(private todoService : TodoService){

  }

  handleAdd(){
    let newTodo : Todo = { // type interface
      id : uuidv4(),
      title : this.todoTitle,
      isComplete : false,
      date : new Date(),
    };
    this.todoService.addTodo(newTodo); 
    this.todoTitle = "";
   }
}
