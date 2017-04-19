import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { CrudService } from './crud-service.service';
import { DateRecord } from './date-record';

export enum Period { Week, Month, Year }

@Injectable()
export abstract class DateCrudService<T extends DateRecord> extends CrudService<T> {

  constructor(protected http: Http) {
    super(http);
  }

  listForPeriod(period: Period, offset: number): Observable<T[]> {
    let dateRange: [Date, Date];
    switch (period) {
      case Period.Week:
        dateRange = this.weekRange(offset);
        break;
      case Period.Month:
        dateRange = this.monthRange(offset);
        break;
      case Period.Year:
        dateRange = this.yearRange(offset);
        break;
    }
    return this.listInRange(dateRange);
  }

  weekRange(offset = 0): [Date, Date] {
    const now = new Date();
    const weekStart = 1 + now.getDate() - now.getDay();
    const start = new Date(now.getFullYear(), now.getMonth(), weekStart + (offset * 7));
    const end = new Date(now.getFullYear(), now.getMonth(), weekStart + (offset * 7) + 7);
    return [start, end];
  }

  monthRange(offset = 0): [Date, Date] {
    const now = new Date();
    const month = now.getMonth();
    const start = new Date(now.getFullYear(), month + offset);
    const end = new Date(now.getFullYear(), month + offset + 1);
    return [start, end];
  }

  yearRange(offset = 0): [Date, Date] {
    const now = new Date();
    const year = now.getFullYear();
    const start = new Date(year + offset, 0);
    const end = new Date(year + offset + 1, 0);
    return [start, end];
  }

  private listInRange(dateRange: [Date, Date]): Observable<T[]> {
    return this.filterAll((item: T) => {
      const recorded = new Date(item.recorded);
      return recorded >= dateRange[0] && recorded <= dateRange[1];
    });
  }
}
