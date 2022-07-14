import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  // methods
  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${term}`;
    return this.http.get<Country[]>(url);
  }
}