import { Record } from 'app/shared/model/record';

export class FoodItem extends Record {

    constructor(
            public name: string,
            public specificCalories: number,
            public specificCarbohydrates?: number,
            public specificFat?: number,
            public specificProtein?: number) {

        super();
    }
}
