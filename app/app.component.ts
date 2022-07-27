import { Component } from '@angular/core';
import {
  Router
} from '@angular/router';
import { ToDo } from './todo/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<ToDo>;
  constructor(private router: Router) {
  };

  sortedArticles(): ToDo[] {
    return this.todos.sort((a:ToDo, b:ToDo) => b.votes - a.votes);
  }
}


