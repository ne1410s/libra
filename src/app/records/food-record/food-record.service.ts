import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DateCrudService } from 'app/shared/model/date-crud-service.service';
import { FoodRecord } from './food-record';

@Injectable()
export class FoodRecordService extends DateCrudService<FoodRecord> {

  protected apiEntityPath = 'foodRecords';

  constructor(protected http: Http) {
    super(http);
  }
}
