import { EntityRecord } from 'app/shared/model/entity-record';
import { Exercise } from './exercise';

export class ExerciseRecord extends EntityRecord<Exercise> {

    constructor(
            public exercise: Exercise,
            public minutes: number,
            recorded?: Date) {

        super(exercise, recorded);
    }
}
