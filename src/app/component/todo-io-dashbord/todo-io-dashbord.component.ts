import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-io-dashbord',
  templateUrl: './todo-io-dashbord.component.html',
  styleUrls: ['./todo-io-dashbord.component.scss']
})
export class TodoIODashbordComponent implements OnInit{

  constructor() { }

  todoarr : Itodo[] = []
  editObj !: Itodo


  ngOnInit(): void {
    this.todoarr = todoArr
  }

  ongettodo(todo :Itodo){
    this.todoarr.unshift(todo)
  }

  getremoveId(id:string){
    let getindex = this.todoarr.findIndex(i=>i.todoid === id)
    this.todoarr.splice(getindex,1)
  }

  geteditobj(todo:Itodo){
    this.editObj = todo
  }

  onupdatetodo(todo : Itodo){
    let getindex = this.todoarr.findIndex(i=>i.todoid === todo.todoid)
    this.todoarr[getindex] = todo
  }
}
