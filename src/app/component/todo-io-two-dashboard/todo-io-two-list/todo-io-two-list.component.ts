import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-io-two-list',
  templateUrl: './todo-io-two-list.component.html',
  styleUrls: ['./todo-io-two-list.component.scss']
})
export class TodoIoTwoListComponent implements OnInit {

  @Input() todoobj !: Itodo[]
  @Output() emitremovetodo : EventEmitter<string> = new EventEmitter<string>()
  @Output() emiteditobj : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor() { }

  ngOnInit(): void {
  }

  onremove(todo:string){
    this.emitremovetodo.emit(todo)
  }

  onedit(todo:Itodo){
    this.emiteditobj.emit(todo)
  }
}
