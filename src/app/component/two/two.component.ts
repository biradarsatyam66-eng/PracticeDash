import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  @Input() getmsg !: string
  @Input() getpost : any[] = []


  constructor() { }

  ngOnInit(): void {
  }

}
