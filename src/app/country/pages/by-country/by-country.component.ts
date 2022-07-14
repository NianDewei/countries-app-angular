import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent implements OnInit {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  // methods
  search(term: string): void {
    this.error = false;
    this.term = term;

    console.log(term);

    this.countryService.searchCountry(term).subscribe({
      // recommended way
      next: (countries) => (this.countries = countries),
      error: (error) => {
        this.error = true;
        this.countries = [];
      },
      complete: () => console.log('Complete'),
      //------------------------------------------
    });
  }

  suggestions(term: string){
    this.error= false
    // TODO create suggestion list
  }
}
