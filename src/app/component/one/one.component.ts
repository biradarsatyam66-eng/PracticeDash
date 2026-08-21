import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  mgs : string = 'hello satyam always stay happy!!!'
  posts1 : any = {
    title : 'Typescript',
    content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus odit molestiae consequat',
    id : '123',
    postId : 1
  }
  posts : any = {
    title : 'Javascript',
    content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus odit molestiae consequat',
    id : '124',
    postId : 2
  }
  constructor() { }

  ngOnInit(): void {
  }

}