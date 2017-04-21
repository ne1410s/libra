import { EntityRecord } from 'app/shared/model/entity-record';
import { ExerciseItem } from 'app/items/exercise-item/exercise-item';

export class ExerciseRecord extends EntityRecord<ExerciseItem> {

    constructor(
            public exerciseItem: ExerciseItem,
            public minutes: number,
            recorded?: Date) {

        super(exerciseItem, recorded);
    }
}
