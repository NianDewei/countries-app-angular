import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html'
})
export class ByRegionComponent implements OnInit {
  term: string = '';
  error: boolean = false;
  regions: string[] = ['Asia', 'Europe', 'America', 'South America', 'Oceania'];
  activeRegion: string = '';
  countries: Country[] = [];


  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  // methods
  getActiveRegion(region: string) {
    if (region === this.activeRegion) {
      return;
    }
    this.activeRegion = region;
    this.search(region);
  }

  getClassActive(region: string): string {
    return region === this.activeRegion
      ? 'btn btn-primary m-1'
      : 'btn btn-outline-primary m-1';
  }

  private search(term: string): void {
    this.error = false;
    this.term = term;

    this.countryService.searchByRegion(term).subscribe({
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

}
