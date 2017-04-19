import { DateRecord } from 'app/shared/model/date-record';

export class MassRecord extends DateRecord {

    constructor(
            public kilos: number,
            recorded?: Date) {

        super(recorded);
    }
}
