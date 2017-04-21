import { DateRecord } from './date-record';
import { Record } from './record';

export abstract class EntityRecord<T extends Record> extends DateRecord {

    constructor(
            public entity: T,
            recorded?: Date) {

        super(recorded);
    }
}
