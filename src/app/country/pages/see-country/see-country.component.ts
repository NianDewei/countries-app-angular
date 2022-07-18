import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [],
})
export class SeeCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private activeRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // 01 option with switchMap()
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.countryService.searchByCode(id)))
      //preview code
      .subscribe({
        next: (data: Country) => this.country = data,
        error: (error: Error) => console.log('Not Found'),
      });

    // 02 option
    // this.activeRoute.params.subscribe({
    //   next: ({ id }: Params) =>
    //     this.countryService.searchByCode(id).subscribe({
    //       // next: (country: Country) => console.log(country),
    //       next: (country: Country) => this.country = country,
    //     }),
    // });
  }
}
