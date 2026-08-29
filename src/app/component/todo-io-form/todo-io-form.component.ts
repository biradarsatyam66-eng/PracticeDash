import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-io-form',
  templateUrl: './todo-io-form.component.html',
  styleUrls: ['./todo-io-form.component.scss']
})
export class TodoIOFormComponent implements OnInit,OnChanges {

  @ViewChild('todoform') todoform !: NgForm
  @Output() emitnewtodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() edittodoObj !: Itodo
  @Output() emitupdateobj : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  editid !: string

  isineditmode:boolean = false

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
      if(!!changes['edittodoObj'] ['currentValue']){
        this.isineditmode = true
        this.todoform.form.patchValue(changes['edittodoObj'] ['currentValue'])
        this.editid = this.edittodoObj.todoid
      }
  }

  ngOnInit(): void {
    
  }

  onAddtodo(){
    let newtodo :Itodo = {...this.todoform.value, todoid : Date.now().toString()}
    this.emitnewtodo.emit(newtodo)
    this.todoform.reset()
  }

  onUpdate(){
    let updateTodo = {...this.todoform.value, todoid: this.editid}
    this.emitupdateobj.emit(updateTodo)
    this.todoform.reset()
    this.isineditmode = false
  }
}
