import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { CrudService } from './crud-service.service';
import { DateCrudService, Period } from './date-crud-service.service';
import { EntityRecord } from './entity-record';
import { Record } from './record';

@Injectable()
export abstract class EntityDateCrudService<T extends EntityRecord<U>, U extends Record> extends DateCrudService<T> {

  constructor(http: Http, protected crudService: CrudService<U>) {
    super(http);
  }

  /** Make a get request to refresh the linked entity. */
  get(id: number): Observable<T> {
    return super.get(id).map(item => {
      item.entity = this.crudService.get(item.entityId);
      item.entity.subscribe(ent => {
        item.cacheEntity = ent;
        item.entityId = ent.id;
      });
      return item;
    });
  }

  /** Make a get request to refresh the linked entity. */
  list(): Observable<T[]> {
    return super.list().map(items => {
      items.forEach(item => {
        item.entity = this.crudService.get(item.entityId);
        item.entity.subscribe(ent => {
          item.cacheEntity = ent;
          item.entityId = ent.id;
        });
      });
      return items;
    });
  }

  listForPeriod(period: Period, offset: number, tolerance: number = 0): Observable<T[]> {
    const dateRange = DateCrudService.getDates(period, offset, tolerance);
    return this.listForRange(dateRange);
  }

  listForRange(dateRange: [Date, Date]): Observable<T[]> {
    if (!this.allRecordsCache) {
      console.log(`${this.apiEntityPath}: Calling http to update the cache (entity)`);
      this.allRecordsCache = this.list();
    }

    return this.allRecordsCache.map(items => {
      return items.filter(item => this.rangeFilter(item, dateRange[0], dateRange[1]));
    });
  }
}
