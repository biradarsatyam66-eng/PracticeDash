import { Component, Input, OnInit } from '@angular/core';
import { IMobile } from 'src/app/model/mobile.interface';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent implements OnInit {

  @Input() getmobile !: IMobile
  constructor() { }

  ngOnInit(): void {
  }

}
