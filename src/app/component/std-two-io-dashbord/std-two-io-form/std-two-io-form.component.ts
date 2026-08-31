import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-two-io-form',
  templateUrl: './std-two-io-form.component.html',
  styleUrls: ['./std-two-io-form.component.scss']
})
export class StdTwoIoFormComponent implements OnInit,OnChanges {


  @ViewChild('stdForm') stdForm !: NgForm
  @Output() emitnewstd = new EventEmitter<Istd>()
  @Input() EditObj !: Istd
  @Output() emitupdatestd = new EventEmitter<Istd>()

  editid !: string

  isinEditMode : Boolean = false

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['EditObj']['currentValue']){
        this.isinEditMode = true
        this.stdForm.form.patchValue(changes['EditObj']['currentValue'])
        this.editid = this.EditObj.stdId
      }
  }

  ngOnInit(): void {
  }

  onAddStd(){
    let newstd = {...this.stdForm.value,stdId:Date.now().toString()}
    this.emitnewstd.emit(newstd)
    this.stdForm.reset()
  }

  onUpdate(){
    let updatestd = {...this.stdForm.value,stdId:this.editid}
    this.emitupdatestd.emit(updatestd)
    this.isinEditMode = false
    this.stdForm.reset()
  }
}
