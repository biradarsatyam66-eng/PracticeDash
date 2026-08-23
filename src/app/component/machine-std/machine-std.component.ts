import { Component, OnInit } from '@angular/core';
import { StdArr } from 'src/app/const/std';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-machine-std',
  templateUrl: './machine-std.component.html',
  styleUrls: ['./machine-std.component.scss']
})
export class MachineStdComponent implements OnInit {

  fname !: string
  lname !: string
  email !: string
  contact !: number

  editStd !: Istd
  isineditmode :Boolean = false

  constructor() { }

  stdarr :Array<Istd> = []

  ngOnInit(): void {
    this.stdarr = StdArr
  }

  onADD(){
    let newobj = {
      fname : this.fname,
      lname : this.lname,
      contact : +this.contact,
      email : this.email,
      stdId : Date.now().toString()
    }

    this.fname = ''
    this.lname = ''
    this.contact = +''
    this.email = ''

    this.stdarr.unshift(newobj)
  }

  onEdit(s :Istd){
    this.editStd = s
    this.isineditmode = true

    this.fname = s.fname
    this.lname = s.lname
    this.contact = s.contact
    this.email = s.email
  }

  onUPDATE(){
    let updateId = this.editStd.stdId
    this.isineditmode = false

    let updateObj = {
      fname : this.fname,
      lname : this.lname,
      contact : +this.contact,
      email : this.email,
      stdId : updateId
    }

    this.fname = ''
    this.lname = ''
    this.contact = +''
    this.email = ''

    let getindex = this.stdarr.findIndex(i=>i.stdId === updateId)
    this.stdarr[getindex] = updateObj
  }

  onDelete(s:string){
    let getindex = this.stdarr.findIndex(i=>i.stdId === s)
    this.stdarr.splice(getindex,1)
  }
}
