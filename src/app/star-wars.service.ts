import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { People } from './interfaces/person'

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  apiUrl = 'https://swapi.dev/api';

  constructor(private http:HttpClient) { }

  getPeople() {
    return this.http.get<People>(`${this.apiUrl}/people/`);
  }
}
