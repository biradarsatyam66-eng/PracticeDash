import { Component, OnInit } from '@angular/core';
import { Imovies } from '../../model/movie.interface';
import { movieArray } from '../../const/movie';

@Component({
  selector: 'app-movie-dashbord',
  templateUrl: './movie-dashbord.component.html',
  styleUrls: ['./movie-dashbord.component.scss']
})
export class MovieDashbordComponent implements OnInit {

  movieArr : Imovies[] = []
  constructor() { }

  ngOnInit(): void {
    this.movieArr = movieArray
  }

}
