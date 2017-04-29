import { OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

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
        this.entityList.subscribe(items => {
            this.detailItem.entity = items.find(item => item.id === id);
        });
    }

    ngOnInit(): void {
        this.entityList = this.crudService.list();
    }
}
