import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-text-uper',
  templateUrl: './app-text-upper.component.html',
  styleUrls: ['./app-text-upper.component.css']
})
export class AppTextUpperComponent implements OnInit, OnChanges {

  // @Input() set displayText(val: string) {
  //   this.text$ = val.toUpperCase();
  // }

  @Input() text = '';

  text$ = new BehaviorSubject(this.text);

  upperCaseText$: Observable<string>;

  constructor() { }

  ngOnInit(): void {
    this.upperCaseText$ = this.text$.pipe(map(t => t.toUpperCase()));
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { text } = changes;
    if (text) {
      this.text$.next(text.currentValue);
    }
  }
}