import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DateCrudService, Period } from 'app/shared/model/date-crud-service.service';
import { MassRecord } from './mass-record';

@Injectable()
export class MassRecordService extends DateCrudService<MassRecord> {

  protected apiEntityPath = 'massRecords';

  constructor(protected http: Http) {
    super(http);
  }

  getMinMaxKilos(records: MassRecord[], maxPadding: number = 10): [number, number] {
    const retVal: [number, number] = [1000, 0];
    records.forEach(record => {
      retVal[0] = Math.min(retVal[0], record.kilos);
      retVal[1] = Math.max(retVal[1], record.kilos);
    });
    return [this.buffer(retVal[0], false, maxPadding), this.buffer(retVal[1], true, maxPadding)];
  }

  buffer(value: number, goUp: boolean, size: number): number {
    return goUp
      ? (Math.ceil((value) / size) * size) + size
      : (Math.floor((value) / size) * size) - size;
  }
}
