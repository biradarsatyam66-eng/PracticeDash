import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-crud',
  templateUrl: './std-crud.component.html',
  styleUrls: ['./std-crud.component.scss']
})
export class StdCrudComponent implements OnInit {

  isineditmode : boolean = false

  editStd !: Istd

  @ViewChild('fname') fname !: ElementRef
  @ViewChild('lname') lname !: ElementRef
  @ViewChild('email') email !: ElementRef
  @ViewChild('contact') contact !: ElementRef
  constructor() { }

  StdArr : Array<Istd> = [{
    fname : "Satyam",
    lname : "Biradar",
    email : "biradarsatyam66@gmail.com",
    contact : 9011813971,
    stdId : '234',
  },
  {
    fname : "Shubham",
    lname : "Biradar",
    email : "shub66@gmail.com",
    contact : 7890678901,
    stdId : '239',
  },
  {
  fname: "Rahul",
  lname: "Sharma",
  email: "rahul.sharma@gmail.com",
  contact: 9876543210,
  stdId: "235",
},
{
  fname: "Priya",
  lname: "Patil",
  email: "priya.patil@gmail.com",
  contact: 9123456780,
  stdId: "236",
},
{
  fname: "Amit",
  lname: "Verma",
  email: "amit.verma@gmail.com",
  contact: 9988776655,
  stdId: "237",
},
{
  fname: "Sneha",
  lname: "Kulkarni",
  email: "sneha.kulkarni@gmail.com",
  contact: 9090909090,
  stdId: "238",
},
]

  ngOnInit(): void {
  }

  onADD(){
    let new_obj = {
      fname : this.fname.nativeElement.value,
      lname : this.lname.nativeElement.value,
      email : this.email.nativeElement.value,
      contact : +this.contact.nativeElement.value,
      stdId : Date.now().toString()
    }

    this.fname.nativeElement.value = ''
    this.lname.nativeElement.value = ''
    this.contact.nativeElement.value = ''
    this.email.nativeElement.value = ''

    this.StdArr.unshift(new_obj)
  }

  onEdit(s: Istd){
    this.isineditmode = true
    this.editStd = s

    this.fname.nativeElement.value = s.fname
    this.lname.nativeElement.value = s.lname
    this.contact.nativeElement.value = s.contact
    this.email.nativeElement.value = s.email
  }

  onUpdate(){
    let update_id = this.editStd.stdId

    let update_obj = {
      fname : this.fname.nativeElement.value,
      lname : this.lname.nativeElement.value,
      email : this.email.nativeElement.value,
      contact : +this.contact.nativeElement.value,
      stdId : update_id
    }

    this.fname.nativeElement.value = ''
    this.lname.nativeElement.value = ''
    this.contact.nativeElement.value = ''
    this.email.nativeElement.value = ''

    this.isineditmode = false
    let getIndex = this.StdArr.findIndex(i=>i.stdId === update_id)
    this.StdArr[getIndex] = update_obj

  }

  onDelete(s:string){
    let getindex = this.StdArr.findIndex(i=>i.stdId === s)
    this.StdArr.splice(getindex,1)
  }
}
