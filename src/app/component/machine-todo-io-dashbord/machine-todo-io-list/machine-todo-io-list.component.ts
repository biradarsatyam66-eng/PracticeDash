import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-machine-todo-io-list',
  templateUrl: './machine-todo-io-list.component.html',
  styleUrls: ['./machine-todo-io-list.component.scss']
})
export class MachineTodoIoListComponent implements OnInit {

  @Input() getTodoItem !: Itodo[]
  @Output() emitEditObj : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Output() emitDeleteobj : EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(todo:Itodo){
    this.emitEditObj.emit(todo)
  }

  onDelete(todoid:string){
    this.emitDeleteobj.emit(todoid)
  }
}
