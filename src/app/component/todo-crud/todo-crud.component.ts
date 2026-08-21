import { Component, OnInit } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-crud',
  templateUrl: './todo-crud.component.html',
  styleUrls: ['./todo-crud.component.scss']
})
export class TodoCrudComponent implements OnInit {

  isineditMode: boolean = false

  editTodo !: Itodo

  constructor() { }

  todoarr : Itodo[] = []

  ngOnInit(): void {
    this.todoarr = todoArr
  }

  onAdd(todo : HTMLInputElement){
    let new_obj = {
      todoitem : todo.value,
      todoid : Date.now().toString()
    }
    todo.value = ''
    this.todoarr.unshift(new_obj)
  }

  onEdit(t : Itodo,todo : HTMLInputElement){
    this.editTodo = t;
    this.isineditMode = true;

    todo.value = t.todoitem
  }

  onUpdate(todo: HTMLInputElement){
    let update_id = this.editTodo.todoid

    let update_obj = {
      todoitem: todo.value,
      todoid : update_id
    }
    todo.value = ''
    this.isineditMode=false

    let getindex = this.todoarr.findIndex(i=>i.todoid === update_id)
    this.todoarr[getindex] = update_obj 
  }

  onremove(t:string){
    let getindex = this.todoarr.findIndex(i=>i.todoid === t)
    this.todoarr.splice(getindex,1)
  }
}
