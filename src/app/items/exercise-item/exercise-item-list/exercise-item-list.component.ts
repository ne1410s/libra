import { Component } from '@angular/core';

import { Column } from 'app/shared/table/table.component';
import { ExerciseItem } from '../exercise-item';
import { ExerciseItemService } from '../exercise-item.service';
import { ListBase } from 'app/shared/model/list-base';

@Component({
  selector: 'app-exercise-item-list',
  templateUrl: './exercise-item-list.component.html'
})
export class ExerciseItemListComponent extends ListBase<ExerciseItem> {

  constructor(protected crudService: ExerciseItemService) {
    super(crudService);
  }

  initColumns(): void {
    this.columns = [
      new Column('name', 'Name'),
      new Column('calsPerHour', 'Burn Rate', '25%', v => v + ' kCal/hr')
    ];
  }
}
