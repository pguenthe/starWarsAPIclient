import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service'
import { People } from '../interfaces/person';

@Component({
  selector: 'app-people-view',
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.css']
})
export class PeopleViewComponent implements OnInit {
  people:People;
  
  constructor(private swapi:StarWarsService) { }

  ngOnInit(): void {
    this.swapi.getPeople().subscribe(
      (data:People) => this.people = { ...data },
      error => console.error(error)
    );
  }

}
