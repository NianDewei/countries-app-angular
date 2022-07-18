import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.sass'],
})
export class ByCountryComponent implements OnInit {
  term: string = '';
  error: boolean = false;
  seeSuggested: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  // methods
  search(term: string): void {
    this.error = false;
    this.term = term;

    this.countryService.searchByCountry(term).subscribe({
      // recommended way
      next: (countries) => (this.countries = countries),
      error: (error) => {
        this.error = true;
        this.countries = [];
      },
      complete: () => {
        this.suggestedCountries = [];
        this.seeSuggested = false;
      },
      //------------------------------------------
    });
  }

  getSuggestions(term: string) {
    this.error = false;
    this.seeSuggested = true;
    this.term = term;
    this.countryService.searchByCountry(term).subscribe({
      next: (data) => (this.suggestedCountries = data.splice(0, 4)),
      error: () => {
        this.suggestedCountries = [];
        this.seeSuggested = false;
      },
    });
  }
}
