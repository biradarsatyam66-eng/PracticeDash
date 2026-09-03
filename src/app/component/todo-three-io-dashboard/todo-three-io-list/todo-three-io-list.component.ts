import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-three-io-list',
  templateUrl: './todo-three-io-list.component.html',
  styleUrls: ['./todo-three-io-list.component.scss']
})
export class TodoThreeIoListComponent implements OnInit {

  @Input() gettodoinfo !: Itodo[]
  @Output() emiteditobj : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Output() emitdeleteobj = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onedit(todo:Itodo){
    this.emiteditobj.emit(todo)
  }

  ondelete(todoid:string){
    this.emitdeleteobj.emit(todoid)
  }

}
