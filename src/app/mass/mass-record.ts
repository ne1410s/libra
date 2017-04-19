import { DateRecord } from 'app/shared/date-record';

export class MassRecord extends DateRecord {

    constructor(
            public kilos: number,
            recorded = new Date()) {

        super(recorded);
    }
}
