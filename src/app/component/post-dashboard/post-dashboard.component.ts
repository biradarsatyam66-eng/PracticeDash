import { Component, OnInit } from '@angular/core';
import { posts } from 'src/app/const/posts';
import { IPost } from 'src/app/model/post.interface';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {

  postArr : Array<IPost> = []  
  constructor() { }

  ngOnInit(): void {
    this.postArr = posts
  }

}
