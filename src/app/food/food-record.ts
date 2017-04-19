import { EntityRecord } from 'app/shared/entity-record';
import { FoodItem } from './food-item';

export class FoodRecord extends EntityRecord<FoodItem> {

    constructor(
            public foodItem: FoodItem,
            public grams: number,
            recorded = new Date()) {

        super(foodItem, recorded);
    }
}
