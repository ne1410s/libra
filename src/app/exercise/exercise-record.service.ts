import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DateCrudService } from 'app/shared/model/date-crud-service.service';
import { ExerciseRecord } from './exercise-record';

@Injectable()
export class ExerciseRecordService extends DateCrudService<ExerciseRecord> {

  protected apiEntityPath = 'exerciseRecords';

  constructor(protected http: Http) {
    super(http);
  }
}
