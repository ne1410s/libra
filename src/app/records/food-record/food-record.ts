import { EntityRecord } from 'app/shared/model/entity-record';
import { FoodItem } from 'app/items/food-item/food-item';

export class FoodRecord extends EntityRecord<FoodItem> {

    constructor(
            public foodItem: FoodItem,
            public grams: number,
            recorded?: Date) {

        super(foodItem, recorded);
    }
}
