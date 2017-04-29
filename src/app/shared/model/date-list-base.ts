
import { DateRecord } from './date-record';
import { Record } from './record';
import { ListBase } from './list-base';

export abstract class DateListBase<T extends DateRecord> extends ListBase<T> {

    onRecordCreated(record: T): void {
        record.recorded = new Date();
    }
}
