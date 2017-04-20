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

  offsetChange() {
    this.onOffsetChanged.emit(this.offset);
  }

  periodChange(period: Period) {
    this.period = period;
    this.onPeriodChanged.emit(period);
  }
}
