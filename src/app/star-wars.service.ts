import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Film } from './interfaces/film'
import { People } from './interfaces/person'
import { Planet } from './interfaces/planet'

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  apiUrl = 'https://swapi.dev/api';

  constructor(private http:HttpClient) { }

  getPeople() {
    return this.http.get<People>(`${this.apiUrl}/people/`);
  }

  getPlanet(url:string) {
    return this.http.get<Planet>(url);
  }

  getFilm(url:string) {
    return this.http.get<Film>(url);
  }
}
