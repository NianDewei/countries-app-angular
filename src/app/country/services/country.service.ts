import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiURL: string = 'https://restcountries.com/v3.1';
  private fields: string = 'name,population,flags,ccn3';
  private params: HttpParams = new HttpParams().set('fields' , this.fields);

  constructor(private http: HttpClient) {}

  // methods
  searchByCountry(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${term}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${term}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  searchByRegion(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${term}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  searchByCode(term: string): Observable<Country> {
    const fields:string = this.fields+',translations,cca3'
    const params = new HttpParams().set('fields',fields)
    const url = `${this.apiURL}/alpha/${term}`;
    return this.http.get<Country>(url, { params: params })
  }
}
