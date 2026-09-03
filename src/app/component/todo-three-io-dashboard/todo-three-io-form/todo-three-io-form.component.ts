import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-three-io-form',
  templateUrl: './todo-three-io-form.component.html',
  styleUrls: ['./todo-three-io-form.component.scss']
})
export class TodoThreeIoFormComponent implements OnInit,OnChanges {

  @ViewChild('todoform') todoform !: NgForm
  @Output() emitnewtodo = new EventEmitter<Itodo>()
  @Input() EditObj !: Itodo
  @Output() emitupdatetodo = new EventEmitter<Itodo>()

  isinEditMode : Boolean = false
  isInvalid: boolean = false;
  editid !: string

  constructor(private _snackbar:TodoService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['EditObj']['currentValue'],this.todoform.invalid){
        this.isInvalid=false

        this.todoform.form.patchValue(changes['EditObj']['currentValue'])
        this.isinEditMode = true
        this.editid = this.EditObj.todoid
      }
  }


  ngOnInit(): void {
  }

  onAddtodo(){
    if(this.todoform.valid){
      this.isInvalid = false

      let newtodo = {...this.todoform.value,todoid:Date.now().toString()}
      this.emitnewtodo.emit(newtodo)
      this.todoform.reset()
      this._snackbar.onSnackBarShow('NEW TODO ADDED SUCCESSFULLY !!!!')
    }else{
      this.isInvalid = true
    }
  }

  onupdate(){
    if(this.todoform.valid){
      this.isInvalid = false

      let updateobj = {...this.todoform.value,todoid:this.editid}
      this.emitupdatetodo.emit(updateobj)
      this.isinEditMode = false
      this.todoform.reset()
      this._snackbar.onSnackBarShow('TODO UPDATED SUCCESSFULLY !!!!')
    }else{
      this.isInvalid = true
    }
  }
}
