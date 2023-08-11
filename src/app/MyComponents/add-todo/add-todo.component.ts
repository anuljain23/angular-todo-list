import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  @Output() addNewTodo: EventEmitter<Todo> = new EventEmitter();

  title!:string;
  desc!:string

  addTodoItem(){
    const todo = {
      sno:7,
      title : this.title,
      desc : this.desc,
      active : true
    }
    this.addNewTodo.emit(todo)
  }
}
