import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/std.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-std-three-io-form',
  templateUrl: './std-three-io-form.component.html',
  styleUrls: ['./std-three-io-form.component.scss']
})
export class StdThreeIoFormComponent implements OnInit,OnChanges {

  @ViewChild('stdform') stdform !: NgForm
  @Output() emitnewstd = new EventEmitter<Istd>()
  @Input() EditObj !: Istd 
  @Output() emitupdateObj :EventEmitter<Istd> = new EventEmitter<Istd>()

  editId !: string

  isinEditMOde : Boolean = false

  constructor(private _snackbar:TodoService) { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['EditObj']['currentValue']){
        this.isinEditMOde = true
        this.stdform.form.patchValue(changes['EditObj']['currentValue'])
        this.editId = this.EditObj.stdId
      }
  }

  ngOnInit(): void {
  }


  onAddStd(){
    let newobj = {...this.stdform.value,stdId:Date.now().toString()}
    this.emitnewstd.emit(newobj)
    this.stdform.reset()
    this._snackbar.onSnackBarShow('NEW STD ADD SUCCESSFULLY !!!')
  }

  onUpdate(){
    let updateObj = {...this.stdform.value,stdId:this.editId}
    this.emitupdateObj.emit(updateObj)
    this.isinEditMOde = false
    this.stdform.reset()
    this._snackbar.onSnackBarShow('STD UPDATED SUCCESSFULLY !!!')
  }
}
