import { Record } from 'app/shared/model/record';

export class Exercise extends Record {

    constructor(
            public name: string,
            public burnRate: number) {

        super();
    }
}
