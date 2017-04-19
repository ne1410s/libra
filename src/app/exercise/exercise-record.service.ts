import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CrudService } from 'app/shared/crud-service.service';
import { ExerciseRecord } from './exercise-record';

@Injectable()
export class ExerciseRecordService extends CrudService<ExerciseRecord> {

  protected apiEntityPath = 'exerciseRecords';

  constructor(protected http: Http) {
    super(http);
  }
}
