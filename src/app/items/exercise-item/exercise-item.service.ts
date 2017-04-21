import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CrudService } from 'app/shared/model/crud-service.service';
import { ExerciseItem } from 'app/items/exercise-item/exercise-item';

@Injectable()
export class ExerciseItemService extends CrudService<ExerciseItem> {

  protected apiEntityPath = 'exerciseItems';

  constructor(protected http: Http) {
    super(http);
  }
}
