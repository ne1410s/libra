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

  private allRecordsCache: Observable<T[]>;

  public static getDates(period: Period, offset: number, tolerance = 0): [Date, Date] {
    switch (period) {
      case Period.Week:
        return DateCrudService.weekRange(offset, tolerance);
      case Period.Month:
        return DateCrudService.monthRange(offset, tolerance);
      case Period.Year:
        return DateCrudService.yearRange(offset, tolerance);
    }
  }

  public static getPeriodDescription(period: Period, offset: number): string {
    const start = DateCrudService.getDates(period, offset)[0];
    switch (period) {
      case Period.Week:
        return `w/c ${start.toDateString().substr(4, 11)}`;
      case Period.Month:
        return `${start.toDateString().substr(4, 3)} ${start.getFullYear()}`;
      case Period.Year:
        return `${start.getFullYear()}`;
    }
  }

  public static weekRange(offset = 0, tolerance = 0): [Date, Date] {
    const now = new Date();
    const weekStart = 1 + now.getDate() - now.getDay();
    const start = new Date(now.getFullYear(), now.getMonth(), weekStart + ((offset - tolerance) * 7));
    const end = new Date(now.getFullYear(), now.getMonth(), weekStart + ((offset + tolerance) * 7) + 7);
    return [start, end];
  }

  public static monthRange(offset = 0, tolerance = 0): [Date, Date] {
    const now = new Date();
    const month = now.getMonth();
    const start = new Date(now.getFullYear(), month + (offset - tolerance));
    const end = new Date(now.getFullYear(), month + (offset + tolerance) + 1);
    return [start, end];
  }

  public static yearRange(offset = 0, tolerance = 0): [Date, Date] {
    const now = new Date();
    const year = now.getFullYear();
    const start = new Date(year + (offset - tolerance), 0);
    const end = new Date(year + (offset + tolerance) + 1, 0);
    return [start, end];
  }

  constructor(protected http: Http) {
    super(http);
  }

  listForPeriod(period: Period, offset: number, tolerance: number = 0): Observable<T[]> {
    const dateRange = DateCrudService.getDates(period, offset, tolerance);
    return this.listForRange(dateRange);
  }

  listForRange(dateRange: [Date, Date]): Observable<T[]> {
    if (!this.allRecordsCache) {
      console.log(`${this.apiEntityPath}: Calling http to update the cache`);
      this.allRecordsCache = this.list();
    }

    return this.allRecordsCache.map(items => {
      return items.filter(item => this.rangeFilter(item, dateRange[0], dateRange[1]));
    });
  }

  private rangeFilter(item: T, start: Date, end: Date): boolean {
    const recorded = new Date(item.recorded);
    return recorded >= start && recorded <= end;
  }
}
