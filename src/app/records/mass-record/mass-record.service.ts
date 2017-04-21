import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DateCrudService } from 'app/shared/model/date-crud-service.service';
import { MassRecord } from './mass-record';

@Injectable()
export class MassRecordService extends DateCrudService<MassRecord> {

  protected apiEntityPath = 'massRecords';

  constructor(protected http: Http) {
    super(http);
  }
}
