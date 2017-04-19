import { EntityRecord } from 'app/shared/entity-record';
import { Exercise } from './exercise';

export class ExerciseRecord extends EntityRecord<Exercise> {

    constructor(
            public exercise: Exercise,
            public minutes: number) {

        super(exercise);
    }
}
