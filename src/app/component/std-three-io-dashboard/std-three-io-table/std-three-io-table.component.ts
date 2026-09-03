import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/model/std.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-std-three-io-table',
  templateUrl: './std-three-io-table.component.html',
  styleUrls: ['./std-three-io-table.component.scss']
})
export class StdThreeIoTableComponent implements OnInit {

  @Input() getstdInfo !: Istd[]
  @Output() emiteditobj :EventEmitter<Istd>  = new EventEmitter<Istd>()
  @Output() emitdeleteobj = new EventEmitter<string>()

  constructor(private _snackbar:TodoService) { }

  ngOnInit(): void {
  }

  onedit(std:Istd){
    this.emiteditobj.emit(std)
  }

  ondelete(stdid:string){
    this.emitdeleteobj.emit(stdid)
    this._snackbar.onSnackBarShow('STD IS DELETED SUCCESSFULLY !!!')
  }
}
