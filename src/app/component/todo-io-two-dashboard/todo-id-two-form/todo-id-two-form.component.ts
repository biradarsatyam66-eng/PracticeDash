import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo.interface';

@Component({
  selector: 'app-todo-id-two-form',
  templateUrl: './todo-id-two-form.component.html',
  styleUrls: ['./todo-id-two-form.component.scss']
})
export class TodoIdTwoFormComponent implements OnInit,OnChanges {

  @ViewChild('todoform') todoform !: NgForm
  @Output() emitNewtodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() getEdit !: Itodo
  @Output() emitupdatetodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()


  isineditmode : Boolean = false
  editid !: string
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
      if(!!changes['getEdit']['currentValue']){
        this.isineditmode = true
        this.todoform.form.patchValue(changes['getEdit']['currentValue'])
        this.editid = this.getEdit.todoid
      }
  }


  ngOnInit(): void {
  }

  ontodoAdd(){
    let newobj:Itodo = {...this.todoform.value, todoid: Date.now().toString()}
    this.emitNewtodo.emit(newobj)
    this.todoform.reset()
  }

  onUpdate(){
    let updateobj = {...this.todoform.value, todoid : this.editid }
    this.emitupdatetodo.emit(updateobj)
    this.todoform.reset()
    this.isineditmode = false
  }
}
