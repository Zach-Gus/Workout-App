import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ToDo } from './todo.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class ToDoComponent implements OnInit {
  @Input() todo: ToDo;
  @Output() deleteEvent: EventEmitter<ToDo>; 
  @Output() displayEvent: EventEmitter<ToDo>;

  //@Output() addNewList: EventEmitter<ToDo>;
  //completedCount: number = 0;

  constructor() {
    this.deleteEvent = new EventEmitter();
    //this.todo.completed = false;
    //this.completedCount = 0;
    
  }

  voteUp(): void {
    this.todo.voteUp();
  }

  voteDown(): void {
    this.todo.voteDown();
  }

  


  deleteToDo(): void {
    this.deleteEvent.emit(this.todo);
    //this.completedCount += 1;
    //console.log(this.completedCount);
    //return this.completedCount;
  }



  ngOnInit() {
  }

}
