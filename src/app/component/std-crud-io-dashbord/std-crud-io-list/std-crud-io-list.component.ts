import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/model/std.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-std-crud-io-list',
  templateUrl: './std-crud-io-list.component.html',
  styleUrls: ['./std-crud-io-list.component.scss']
})
export class StdCrudIoListComponent implements OnInit {

  @Input() ongetStd !: Istd[]
  @Output() emitEditobj = new EventEmitter<Istd>()
  @Output() emitdeletobj = new EventEmitter<string>()

  constructor(private _snackbar : TodoService) { }

  ngOnInit(): void {
  }

  onedit(std:Istd){
    this.emitEditobj.emit(std)
  }

  ondelete(stdid:string){
    this.emitdeletobj.emit(stdid)
    this._snackbar.onSnackBarShow('STD DELETED SUCCESSFULLY!!!')
  }
}
