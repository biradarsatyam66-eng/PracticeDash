import { Component, OnInit } from '@angular/core';
import { StdArr } from 'src/app/const/std';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-three-io-dashboard',
  templateUrl: './std-three-io-dashboard.component.html',
  styleUrls: ['./std-three-io-dashboard.component.scss']
})
export class StdThreeIoDashboardComponent implements OnInit {

  constructor() { }

  stdarr !: Istd[]
  editobj !: Istd

  ngOnInit(): void {
    this.stdarr = StdArr
  }


  getnewstd(std:Istd){
    this.stdarr.unshift(std)
  }

  geteditobj(std:Istd){
    this.editobj = std
  }

  getupdateobj(std:Istd){
    let getindex = this.stdarr.findIndex(i=>i.stdId === std.stdId)
    this.stdarr[getindex] = std
  }

  getdeleteobj(stdId:string){
    let getindex = this.stdarr.findIndex(i=>i.stdId === stdId)
    this.stdarr.splice(getindex,1)
  }

}
