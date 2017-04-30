import { DateRecord } from './date-record';
import { Record } from './record';
import { Observable } from 'rxjs/Observable';

export abstract class EntityRecord<T extends Record> extends DateRecord {

    public entity: Observable<T>;
    public cacheEntity: T;

    constructor(
            public entityId: number,
            recorded?: Date) {

        super(recorded);
    }
}
