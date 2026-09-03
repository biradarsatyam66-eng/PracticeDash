import { Component, OnInit } from '@angular/core';
import { todoArr } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-three-io-dashboard',
  templateUrl: './todo-three-io-dashboard.component.html',
  styleUrls: ['./todo-three-io-dashboard.component.scss']
})
export class TodoThreeIoDashboardComponent implements OnInit {


  todoarr !:Itodo[]
  editobj !:Itodo

  constructor(private _snackbar:TodoService) { }

  ngOnInit(): void {
    this.todoarr = todoArr
  }

  getnewtodo(todo:Itodo){
    this.todoarr.unshift(todo)
  }

  geteditobj(todo:Itodo){
    this.editobj = todo
  }

  getupdatetodo(todo:Itodo){
    let getindex = this.todoarr.findIndex(i=>i.todoid === todo.todoid)
    this.todoarr[getindex] = todo
  }

  getdeleteobj(todoid:string){
    let getindex = this.todoarr.findIndex(i=>i.todoid === todoid)
    this.todoarr.splice(getindex,1)
    this._snackbar.onSnackBarShow('TODO DELETED SUCCESSFULLY !!!')
  }
}
