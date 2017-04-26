import { Component } from '@angular/core';

import { Column } from 'app/shared/table/table.component';
import { ExerciseRecord } from '../exercise-record';
import { ExerciseRecordService } from '../exercise-record.service';
import { ListBase } from 'app/shared/model/list-base';

@Component({
  selector: 'app-exercise-record-list',
  templateUrl: './exercise-record-list.component.html'
})
export class ExerciseRecordListComponent extends ListBase<ExerciseRecord> {

  constructor(protected crudService: ExerciseRecordService) {
    super(crudService);
  }

  initColumns(): void {
    this.columns = [
      new Column('recorded', 'Recorded On', '25%', v => {
        const recorded = new Date(v);
        return recorded.toLocaleDateString() + ' @ ' + recorded.toLocaleTimeString();
      }),
      new Column('entity', 'Exercise', '15%', v => v.name),
      new Column('minutes', 'Duration', '15%', v => v + ' mins'),
      new Column('minutes', 'Cals', '10%', (v, o) => o.entity.calsPerHour * o.minutes / 60)
    ];
  }
}
