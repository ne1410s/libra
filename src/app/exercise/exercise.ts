import { Record } from 'app/shared/record';

export class Exercise extends Record {

    constructor(
            public name: string,
            public burnRate: number) {

        super();
    }
}
