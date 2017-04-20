import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Period } from '../model/date-crud-service.service';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent {
  @Input() period: Period;
  @Input() offset: number;
  @Output() onOffsetChanged = new EventEmitter<number>();
  @Output() onPeriodChanged = new EventEmitter<Period>();

  /** The available array of offset values */
  offsetOptions = Array.from(Array(11), (x, i) => i - 5);

  /** Key value pairs for enumerable */
  periodOptions = [
    { key: Period[Period.Week], value: Period.Week },
    { key: Period[Period.Month], value: Period.Month },
    { key: Period[Period.Year], value: Period.Year }
  ];

  offsetChange() {
    this.onOffsetChanged.emit(this.offset);
  }

  periodChange() {
    this.onPeriodChanged.emit(this.period);
  }
}
