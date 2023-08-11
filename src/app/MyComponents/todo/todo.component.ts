import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  localTodos = localStorage.getItem("todos");
  
  todos:Todo[];
  constructor(){
    this.todos = []
    if(this.localTodos == null){
      this.todos = []
    }else{
      this.todos = JSON.parse(this.localTodos)
    }
  }

  deleteTodoItemFunction(todo:Todo){    
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  
  addNewTodo(todo:Todo){
    console.log(todo);
    
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  markTodoAsDone(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
