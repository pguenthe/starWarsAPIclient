import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../interfaces/film';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {
  film:Film;
  @Input() filmUrl:string;

  constructor(private swapi:StarWarsService) { }

  ngOnInit(): void {
    this.swapi.getFilm(this.filmUrl).subscribe(
      (data:Film) => this.film = { ...data },
      error => console.error(error)
    );
  }

}
