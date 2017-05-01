import { OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { CrudService } from './crud-service.service';
import { DetailBase } from './detail-base';
import { EntityRecord } from './entity-record';
import { DateRecord } from './date-record';
import { Record } from './record';

export class EntityDetail<R extends EntityRecord<E>, E extends Record> extends DetailBase<R> implements OnInit {

    entityList: Observable<E[]>;

    constructor(protected crudService: CrudService<E>) {
        super();
    }

    updateEntity(id: number): void {
        this.detailItem.cacheEntity = {} as E;
        this.detailItem.entityId = id;
        this.entityList.subscribe(items => {
            const entity = items.find(item => item.id === id);
            this.detailItem.entity = Observable.of(entity);
            this.detailItem.cacheEntity = entity;
        });
    }

    ngOnInit(): void {
        this.entityList = this.crudService.list();
    }
}
