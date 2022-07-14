import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [],
})
export class ByCountryComponent implements OnInit {
  term: string = '';
  constructor() {}

  ngOnInit(): void {}

  // methods
  search(): void {
    console.log(this.term)
  }
}
