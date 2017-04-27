import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Record } from './record';
import { CrudService } from './crud-service.service';
import { Column } from 'app/shared/table/table.component';

export abstract class ListBase<T extends Record> implements OnInit {
    viewRecord: T;
    allRecords: Observable<T[]>;
    columns: Column[];

    constructor(protected crudService: CrudService<T>) { }

    abstract initColumns(): void;

    init() {
        this.allRecords = this.crudService.list();
        this.initColumns();
    }

    ngOnInit() {
        this.init();
    }

    onRowClicked(record: T): void {
        this.viewRecord = record;
    }

    onDeleteClicked(record: T): void {
        this.crudService.delete(record.id).subscribe();
        this.allRecords = this.crudService.list();
    }

    onPopupClosed(record: T): void {
        const wasNew = record.id === -1;
        this.crudService.save(record).subscribe(() => {
            this.viewRecord = null;
        });
        if (wasNew) { this.allRecords = this.crudService.list(); }
    }
}
