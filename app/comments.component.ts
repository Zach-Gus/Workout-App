import { Component } from '@angular/core';
import { ToDo } from './todo/todo.model';
import { provideLocationStrategy } from '@angular/router/src/router_module';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  todos: Array<ToDo>;
  numToDos: number = 2;

  constructor() {
    this.todos = [
      new ToDo("Complex:", " 1 leg depth jump to double box vertical hop",false),
      new ToDo("Complex:", "Lateral box explosive hops",true)
    ]
  }

	addToDo(title: HTMLInputElement,details: HTMLInputElement, priority): boolean {
    var todo: ToDo = new ToDo(title.value, details.value, priority.checked);
    this.todos.push(todo);
    title.value ="";
    details.value ="";
    this.numToDos += 1;
    console.log(this.numToDos);
    return false;
  }

  isCompleted(): ToDo[]{
    return this.todos.filter(todo => todo.completed);
  }

  notCompleted(): ToDo[]{
    return this.todos.filter (todo => todo.completed == false);
  }


  deleteFromArray(todo: ToDo): any {
    var index: number = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    this.numToDos -= 1;
    console.log(this.numToDos);
    return todo;
  }

  sortedArticles(): ToDo[] {
    return this.todos.sort((a:ToDo, b:ToDo) => b.votes - a.votes);
  }

}
