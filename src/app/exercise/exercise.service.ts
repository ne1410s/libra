import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CrudService } from 'app/shared/model/crud-service.service';
import { Exercise } from './exercise';

@Injectable()
export class ExerciseService extends CrudService<Exercise> {

  protected apiEntityPath = 'exerciseItems';

  constructor(protected http: Http) {
    super(http);
  }
}
