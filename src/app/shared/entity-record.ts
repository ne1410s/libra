import { DateRecord } from './date-record';
import { Record } from './record';

export abstract class EntityRecord<T extends Record> extends DateRecord {

    constructor(
            readonly entity: T,
            recorded = new Date()) {

        super(recorded);
    }
}
