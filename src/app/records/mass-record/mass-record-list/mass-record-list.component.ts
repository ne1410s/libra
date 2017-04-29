import { Component } from '@angular/core';

import { Column } from 'app/shared/table/table.component';
import { MassRecord } from '../mass-record';
import { MassRecordService } from '../mass-record.service';
import { MassConverterPipe } from 'app/shared/pipes/mass-converter.pipe';
import { DateListBase } from 'app/shared/model/date-list-base';

@Component({
  selector: 'app-mass-record-list',
  templateUrl: './mass-record-list.component.html'
})
export class MassRecordListComponent extends DateListBase<MassRecord> {

  constructor(
      protected crudService: MassRecordService,
      protected massPipe: MassConverterPipe) {

    super(crudService);
  }

  initColumns(): void {
    this.columns = [
      new Column('recorded', 'Recorded On', '33%', v => {
        const recorded = new Date(v);
        return recorded.toLocaleDateString() + ' @ ' + recorded.toLocaleTimeString();
      }),
      new Column('kilos', 'Kg', '22%', v => this.massPipe.transform(v, 'kg')),
      new Column('kilos', 'Lb', '22%', v => this.massPipe.transform(v, 'lb')),
      new Column('kilos', 'St', '22%', v => this.massPipe.transform(v, 'st')),
    ];
  }
}
