import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent implements OnInit {
  term: string = '';
  error: boolean = false;
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  // methods
  search(): void {
    this.error = false
    console.log(this.term);
    this.countryService.searchCountry(this.term).subscribe(
      (resp) =>console.log(resp),
      (err) => {
        this.error = true;
      }
    );
  }
}
