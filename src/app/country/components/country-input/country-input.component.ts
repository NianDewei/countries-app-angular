import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  term: string = '';

  constructor() {}

  ngOnInit(): void {}

  // methods
  search() {
    this.onEnter.emit(this.term);
  }
}
