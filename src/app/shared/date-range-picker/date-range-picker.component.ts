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

  offsetChange(event: any) {
    this.offset = event.target.value;
    this.onOffsetChanged.emit(this.offset);
  }

  periodChange(event: any) {
    this.period = event.target.value;
    this.onPeriodChanged.emit(this.period);
  }
}
