import { Component, OnInit } from '@angular/core';
import { StdArr } from 'src/app/const/std';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-two-io-dashbord',
  templateUrl: './std-two-io-dashbord.component.html',
  styleUrls: ['./std-two-io-dashbord.component.scss']
})
export class StdTwoIoDashbordComponent implements OnInit {

  stdarr:Istd[] = []
  editObj !: Istd

  constructor() { }

  ngOnInit(): void {
    this.stdarr = StdArr
  }

  getnewStd(std:Istd){
    this.stdarr.unshift(std)
  }
  
  geteditobj(std:Istd){
    this.editObj = std
  }

  getupdatestd(std:Istd){
    let getindx = this.stdarr.findIndex(i=>i.stdId === std.stdId)
    this.stdarr[getindx] = std
  }

  getdlteobj(stdid:string){
    let getindex = this.stdarr.findIndex(i=>i.stdId === stdid)
    this.stdarr.splice(getindex,1)
  }
}
