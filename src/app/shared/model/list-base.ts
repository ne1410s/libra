import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Record } from './record';
import { CrudService } from './crud-service.service';
import { Column, SortMode } from 'app/shared/table/table.component';

export abstract class ListBase<T extends Record> implements OnInit {
    viewRecord: T;
    allRecords: Observable<T[]>;
    columns: Column[];

    constructor(protected crudService: CrudService<T>) { }

    abstract initColumns(): void;

    init() {
        this.initColumns();
        this.allRecords = this.crudService.list().map(recs => {
            this.columns.forEach(c => c.sortMode = SortMode.None);
            return this.columns[0].sortRecords(recs);
        });
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

        // Escape where unchanged record
        if (!record.__dirty) { return; }

        const wasNew = record.id === -1;
        this.crudService.save(record).subscribe(() => {
            this.viewRecord = null;
        });

        // Rebuild the list (for new records only)
        if (wasNew) { this.allRecords = this.crudService.list(); }

        // Apply default ordering (new and edited records alike)
        this.allRecords = this.allRecords.map(recs => {
            this.columns.forEach(c => c.sortMode = SortMode.None);
            return this.columns[0].sortRecords(recs);
        });
    }
}
