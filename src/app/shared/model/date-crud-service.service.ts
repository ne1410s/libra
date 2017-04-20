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
    const dateRange = this.getDates(period, offset);
    return this.listInRange(dateRange);
  }

  getDates(period: Period, offset: number): [Date, Date] {
    switch (period) {
      case Period.Week:
        return this.weekRange(offset);
      case Period.Month:
        return this.monthRange(offset);
      case Period.Year:
        return this.yearRange(offset);
    }
  }

  getPeriodDescription(period: Period, offset: number): string {
    const start = this.getDates(period, offset)[0];
    switch (period) {
      case Period.Week:
        return `w/c ${start.toDateString().substr(4, 11)}`;
      case Period.Month:
        return `${start.toDateString().substr(4, 3)} ${start.getFullYear()}`;
      case Period.Year:
        return `${start.getFullYear()}`;
    }
  }

  private weekRange(offset = 0): [Date, Date] {
    const now = new Date();
    const weekStart = 1 + now.getDate() - now.getDay();
    const start = new Date(now.getFullYear(), now.getMonth(), weekStart + (offset * 7));
    const end = new Date(now.getFullYear(), now.getMonth(), weekStart + (offset * 7) + 7);
    return [start, end];
  }

  private monthRange(offset = 0): [Date, Date] {
    const now = new Date();
    const month = now.getMonth();
    const start = new Date(now.getFullYear(), month + offset);
    const end = new Date(now.getFullYear(), month + offset + 1);
    return [start, end];
  }

  private yearRange(offset = 0): [Date, Date] {
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
