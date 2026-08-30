import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo.interface';
import {TodoService} from 'src/app/services/todo.service'

@Component({
  selector: 'app-machine-todo-io-form',
  templateUrl: './machine-todo-io-form.component.html',
  styleUrls: ['./machine-todo-io-form.component.scss']
})
export class MachineTodoIoFormComponent implements OnInit,OnChanges {

  @ViewChild('todoform') todoform !: NgForm
  @Output() emitNewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() edittodoobj !: Itodo
  @Output() emitUpdateObj : EventEmitter<Itodo> = new EventEmitter<Itodo>()
 
  editid !: string
  isineditmode : Boolean = false

  constructor(private _snackBarService: TodoService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['edittodoobj']['currentValue']){
        this.isineditmode = true
        this.todoform.form.patchValue(changes['edittodoobj']['currentValue'])
        this.editid = this.edittodoobj.todoid
      }
  }

  ngOnInit(): void {
  }

  ontodoAdd(){
    let newobj = {...this.todoform.value,todoid : Date.now().toString()}
    this.emitNewTodo.emit(newobj)
    this.todoform.reset()
    this._snackBarService.onSnackBarShow('NEW TODO ADDED SUCCESSFULLY !!!')
  }

  onUpdate(){
    let updateobj = {...this.todoform.value, todoid:this.editid}
    this.emitUpdateObj.emit(updateobj)
    this.todoform.reset()
    this.isineditmode = false
  }
}
