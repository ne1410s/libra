import { Component } from '@angular/core';

import { Column } from 'app/shared/table/table.component';
import { FoodRecord } from '../food-record';
import { FoodRecordService } from '../food-record.service';
import { DateListBase } from 'app/shared/model/date-list-base';

@Component({
  selector: 'app-food-record-list',
  templateUrl: './food-record-list.component.html'
})
export class FoodRecordListComponent extends DateListBase<FoodRecord> {

  constructor(protected crudService: FoodRecordService) {
    super(crudService);
  }

  initColumns(): void {
    this.columns = [
      new Column('recorded', 'Recorded On', '25%', v => {
        const recorded = new Date(v);
        return recorded.toLocaleDateString() + ' @ ' + recorded.toLocaleTimeString();
      }),
      new Column('cacheEntity', 'Food', '15%', v => v.name),
      new Column('grams', 'Mass', '15%', v => v + ' g'),
      new Column('cacheEntity', 'Cals', '10%', (v, o) => (v.calsPerGram * o.grams).toFixed())
    ];
  }
}
