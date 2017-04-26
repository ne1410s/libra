import { Component } from '@angular/core';

import { Column } from 'app/shared/table/table.component';
import { MassRecord } from '../mass-record';
import { MassRecordService } from '../mass-record.service';
import { ListBase } from 'app/shared/model/list-base';

@Component({
  selector: 'app-mass-record-list',
  templateUrl: './mass-record-list.component.html'
})
export class MassRecordListComponent extends ListBase<MassRecord> {

  constructor(protected crudService: MassRecordService) {
    super(crudService);
  }

  initColumns(): void {
    this.columns = [
      new Column('recorded', 'Recorded On', '33%', v => {
        const recorded = new Date(v);
        return recorded.toLocaleDateString() + ' @ ' + recorded.toLocaleTimeString();
      }),
      new Column('kilos', 'Kg', '22%', v => `${v.toFixed(1)} kg`),
      new Column('kilos', 'Lb', '22%', v => {
        const lbs = v * 2.20462;
        return `${lbs.toFixed(1)} lb`;
      }),
      new Column('kilos', 'St', '22%', v => {
        const lbs = v * 2.20462;
        return `${Math.floor(lbs / 14)} st ${(lbs % 14).toFixed(1)} lb`;
      }),
    ];
  }
}
