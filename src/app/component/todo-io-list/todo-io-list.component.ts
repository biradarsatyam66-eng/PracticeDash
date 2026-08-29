import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-io-list',
  templateUrl: './todo-io-list.component.html',
  styleUrls: ['./todo-io-list.component.scss']
})
export class TodoIOListComponent implements OnInit {

  constructor() { }

  @Input() todoitem !: Itodo[]
  @Output() emitremoveId : EventEmitter<string> = new EventEmitter<string>()
  @Output() emiteditobj : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  ngOnInit(): void {
  }

  onDelete(id:string){
    this.emitremoveId.emit(id)
  }

  ontodoedit(todo:Itodo){
    this.emiteditobj.emit(todo)
  }
  
}
