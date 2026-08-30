import { Component, OnInit } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-machine-todo-io-dashbord',
  templateUrl: './machine-todo-io-dashbord.component.html',
  styleUrls: ['./machine-todo-io-dashbord.component.scss']
})
export class MachineTodoIoDashbordComponent implements OnInit {

  constructor() { }

  todoarr: Itodo[] = []

  editobj !: Itodo

  ngOnInit(): void {
    this.todoarr = todoArr
  }

  getNewtodo(todo:Itodo){
    this.todoarr.unshift(todo)
  }

  geteditobj(todo:Itodo){
    this.editobj = todo
  }

  getupdateobj(todo:Itodo){
    let getindex = this.todoarr.findIndex(i=>todo.todoid === todo.todoid)
    this.todoarr[getindex] = todo
  }

  getdeleteobj(todoid:string){
    let getindex = this.todoarr.findIndex(i=>i.todoid === todoid)
    this.todoarr.splice(getindex,1)
  }

}
