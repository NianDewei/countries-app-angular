import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [],
})
export class SeeCountryComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // 01 option with switchMap()
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.countryService.searchByCode(id)))
      .subscribe({
        next: (country: Country) => console.log(country),
      });

    // 02 option
    // this.activeRoute.params.subscribe({
    //   next: ({ id }: Params) =>
    //     this.countryService.searchByCode(id).subscribe({
    //       next: (country: Country) => console.log(country),
    //     }),
    // });
  }
}
