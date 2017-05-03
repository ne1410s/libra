import { Record } from './record';

export abstract class DateRecord extends Record {

    constructor(public recorded: Date) {

        super();
    }
}
