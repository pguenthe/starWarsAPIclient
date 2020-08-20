import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent implements OnInit {
  @Input() person:Person;

  constructor() { }

  ngOnInit(): void {
  }

}
