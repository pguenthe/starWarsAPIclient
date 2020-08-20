import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { Planet } from '../interfaces/planet';

@Component({
  selector: 'app-planet-view',
  templateUrl: './planet-view.component.html',
  styleUrls: ['./planet-view.component.css']
})
export class PlanetViewComponent implements OnInit {
  planet:Planet;
  @Input() planetUrl:string;

  constructor(private swapi:StarWarsService) { }

  ngOnInit(): void {
    this.swapi.getPlanet(this.planetUrl).subscribe(
      (data:Planet) => this.planet = { ...data },
      error => console.error(error)
    );
  }

}
