import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo! : Todo;  
  @Input() i!:number;
  @Output() deleteTodoItem:EventEmitter<Todo> = new EventEmitter();
  @Output() markTodoAsDone:EventEmitter<Todo> = new EventEmitter();

  deleteTodo(todo:Todo){
    this.deleteTodoItem.emit(todo);
  }

  markAsDone(todo:Todo){
    this.markTodoAsDone.emit(todo);
  }
}
