import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-two-io-list',
  templateUrl: './std-two-io-list.component.html',
  styleUrls: ['./std-two-io-list.component.scss']
})
export class StdTwoIoListComponent implements OnInit {

  @Input() getstddata !: Istd[]
  @Output() emiteditobj = new EventEmitter<Istd>()
  @Output() emitdltObj = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onedit(std:Istd){
    this.emiteditobj.emit(std)
  }

  ondelete(stdid:string){
    this.emitdltObj.emit(stdid)
  }
}
