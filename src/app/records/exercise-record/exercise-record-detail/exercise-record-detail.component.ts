import { Component } from '@angular/core';

import { EntityDetail } from 'app/shared/model/entity-detail';
import { ExerciseItem } from 'app/items/exercise-item/exercise-item';
import { ExerciseItemService } from 'app/items/exercise-item/exercise-item.service';
import { ExerciseRecord } from '../exercise-record';

@Component({
  selector: 'app-exercise-record-detail',
  templateUrl: './exercise-record-detail.component.html',
  styleUrls: ['../../../shared/styles/item-detail.css']
})
export class ExerciseRecordDetailComponent extends EntityDetail<ExerciseRecord, ExerciseItem> {

  constructor(protected crudService: ExerciseItemService) {
    super(crudService);
  }
}
