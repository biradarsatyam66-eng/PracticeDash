import { Component, OnInit } from '@angular/core';
import { mobileProducts } from 'src/app/const/mobile';
import { IMobile } from 'src/app/model/mobile.interface';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.scss']
})
export class MobileDashboardComponent implements OnInit {

  constructor() { }

  mobileArr :Array<IMobile> = []

  ngOnInit(): void {
    this.mobileArr = mobileProducts
  }

}
