import { Component, OnInit } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-machine-todo',
  templateUrl: './machine-todo.component.html',
  styleUrls: ['./machine-todo.component.scss']
})
export class MachineTodoComponent implements OnInit {

  isinEditMode : boolean = false

  editobj !: Itodo

  constructor() { }

  todoarr : Array<Itodo> = []

  ngOnInit(): void {
    this.todoarr = todoArr
  }

  onAdd(todo : HTMLInputElement){
    let newobj = {
      todoitem : todo.value,
      todoid : Date.now().toString()
    }
    todo.value = ''
    this.todoarr.unshift(newobj)
  }

  onEdit(t : Itodo,todo : HTMLInputElement){
    this.editobj = t
    todo.value = t.todoitem

    this.isinEditMode = true
  }

  onUpdate(t : HTMLInputElement){
    let updateid = this.editobj.todoid

    let update_obj = {
      todoitem : t.value,
      todoid : updateid
    }

    t.value = ''
    this.isinEditMode = false

    let getindex = this.todoarr.findIndex(i=>i.todoid === updateid)
    this.todoarr[getindex] = update_obj
  }

  ondelete(t:string){
    let getindex = this.todoarr.findIndex(i=>i.todoid === t)
    this.todoarr.splice(getindex,1)
  }

}
