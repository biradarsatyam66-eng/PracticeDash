import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/std.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-std-crud-io-form',
  templateUrl: './std-crud-io-form.component.html',
  styleUrls: ['./std-crud-io-form.component.scss']
})
export class StdCrudIoFormComponent implements OnInit,OnChanges {

  @ViewChild('stdForm') stdForm !: NgForm
  @Output() emitnewStd = new EventEmitter<Istd>()
  @Input() geteditobj !: Istd
  @Output() emitupdatestd = new EventEmitter<Istd>()

  editid !: string
  isinEditMode : Boolean = false
  
  constructor(private _snackbar : TodoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    let editstd = changes['geteditobj']['currentValue']
      if(editstd){
        this.isinEditMode = true
        this.stdForm.form.patchValue(editstd)
        this.editid = this.geteditobj.stdId
      }
  }

  ngOnInit(): void {
  }

  onstdAdd(){
    let newStd: Istd = {...this.stdForm.value, stdId: Date.now().toString()}
    this.emitnewStd.emit(newStd)
    this.stdForm.reset()
    this._snackbar.onSnackBarShow('NEW STD ADD SUCCESSFULLY !!!!')
  }

  onstdUpdate(){
    let updateobj = {...this.stdForm.value, stdId:this.editid}
    this.emitupdatestd.emit(updateobj)
    this.stdForm.reset()
    this.isinEditMode = false
    this._snackbar.onSnackBarShow('STD UPDATED SUCCESSFULLY !!!!')
  }
}
