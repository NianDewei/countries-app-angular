import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [],
})
export class CountryInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // create an observable that emits
  debouncer: Subject<string> = new Subject();

  term: string = '';

  constructor() {}
  // Lifecycle | when the component is instantiated
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe({
      next: (value: string) => this.onDebounce.emit(value),
    });
  }

  // methods
  search() {
    this.onEnter.emit(this.term);
  }

  keyPress() {
    // emit next value
    this.debouncer.next(this.term);
  }
}
