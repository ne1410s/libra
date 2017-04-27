import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CrudService } from './crud-service.service';
import { DateCrudService } from './date-crud-service.service';
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
      this.crudService.get(item.entity.id).subscribe(result => {
        item.entity = result;
      });
      return item;
    });
  }

  /** Make a get request to refresh the linked entity. */
  list(): Observable<T[]> {
    return super.list().map(items => {
      items.forEach(item => {
        this.crudService.get(item.entity.id).subscribe(result => {
          item.entity = result;
        });
      });
      return items;
    });
  }
}
