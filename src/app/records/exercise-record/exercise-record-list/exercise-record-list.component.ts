import { Component } from '@angular/core';

import { Column, SortMode } from 'app/shared/table/table.component';
import { ExerciseRecord } from '../exercise-record';
import { ExerciseRecordService } from '../exercise-record.service';
import { DateListBase } from 'app/shared/model/date-list-base';

@Component({
  selector: 'app-exercise-record-list',
  templateUrl: './exercise-record-list.component.html'
})
export class ExerciseRecordListComponent extends DateListBase<ExerciseRecord> {

  constructor(protected crudService: ExerciseRecordService) {
    super(crudService);
  }

  initColumns(): void {
    this.columns = [
      new Column('recorded', 'Recorded On', '25%', v => {
        const recorded = new Date(v);
        return recorded.toLocaleDateString() + ' @ ' + recorded.toLocaleTimeString();
      }, SortMode.Descending),
      new Column('cacheEntity', 'Exercise', '15%', v => v.name),
      new Column('minutes', 'Duration', '15%', v => v + ' mins'),
      new Column('cacheEntity', 'Cals', '10%', (v, o) => (v.calsPerHour * o.minutes / 60).toFixed())
    ];
  }
}
