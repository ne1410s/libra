import { Component } from '@angular/core';

import { Column } from 'app/shared/table/table.component';
import { FoodRecord } from '../food-record';
import { FoodRecordService } from '../food-record.service';
import { ListBase } from 'app/shared/model/list-base';

@Component({
  selector: 'app-food-record-list',
  templateUrl: './food-record-list.component.html'
})
export class FoodRecordListComponent extends ListBase<FoodRecord> {

  constructor(protected crudService: FoodRecordService) {
    super(crudService);
  }

  initColumns(): void {
    this.columns = [
      new Column('recorded', 'Recorded On', '25%', v => {
        const recorded = new Date(v);
        return recorded.toLocaleDateString() + ' @ ' + recorded.toLocaleTimeString();
      }),
      new Column('entity', 'Food', '25%', v => v.name),
      new Column('grams', 'Mass', '25%', v => v + ' g'),
    ];
  }
}
