import { Component, OnInit } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-io-two-dashboard',
  templateUrl: './todo-io-two-dashboard.component.html',
  styleUrls: ['./todo-io-two-dashboard.component.scss']
})
export class TodoIoTwoDashboardComponent implements OnInit {

  constructor() { }

  todoarr:Itodo[] = []
  editObj !: Itodo

  ngOnInit(): void {
    this.todoarr = todoArr
  }

  getnewtodo(todo:Itodo){
    this.todoarr.unshift(todo)
  }

  getremoveId(todoid:string){
    let getindex = this.todoarr.findIndex(i=>i.todoid === todoid)
    this.todoarr.splice(getindex,1)
  }

  geteditobj(todo:Itodo){
    this.editObj = todo
  }

  gteupdateobj(todo:Itodo){
    let getindex = this.todoarr.findIndex(i=>i.todoid === todo.todoid)
    this.todoarr[getindex] = todo
  }
}
