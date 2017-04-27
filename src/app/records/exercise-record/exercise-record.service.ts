import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { EntityDateCrudService } from 'app/shared/model/entity-date-crud-service.service';
import { ExerciseRecord } from './exercise-record';
import { ExerciseItem } from 'app/items/exercise-item/exercise-item';
import { ExerciseItemService } from 'app/items/exercise-item/exercise-item.service';

@Injectable()
export class ExerciseRecordService extends EntityDateCrudService<ExerciseRecord, ExerciseItem> {

  protected apiEntityPath = 'exerciseRecords';

  constructor(http: Http, crudService: ExerciseItemService) {
    super(http, crudService);
  }
}
