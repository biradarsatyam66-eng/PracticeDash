import { Component, OnInit } from '@angular/core';
import { StdArr } from 'src/app/const/std';
import { Istd } from 'src/app/model/std.interface';

@Component({
  selector: 'app-std-crud-io-dashbord',
  templateUrl: './std-crud-io-dashbord.component.html',
  styleUrls: ['./std-crud-io-dashbord.component.scss']
})
export class StdCrudIoDashbordComponent implements OnInit {

  constructor() { }

  stdarr:Istd[] = []
  editObj !: Istd

  ngOnInit(): void {
    this.stdarr = StdArr
  }

  getnewstd(std:Istd){
    this.stdarr.unshift(std)
  }

  geteditobj(std:Istd){
    this.editObj = std
  }

  gteupdatestd(std:Istd){
    let getindex = this.stdarr.findIndex(i=>i.stdId === std.stdId)
    this.stdarr[getindex] = std
  }

  gtedeleteobj(stdid:string){
    let getindex = this.stdarr.findIndex(i=>i.stdId === stdid)
    this.stdarr.splice(getindex,1)
  }
}
