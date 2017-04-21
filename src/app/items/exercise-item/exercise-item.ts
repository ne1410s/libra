import { Record } from 'app/shared/model/record';

export class ExerciseItem extends Record {

    constructor(
            public name: string,
            public calsPerHour: number) {

        super();
    }
}
