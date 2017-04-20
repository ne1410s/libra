import { Record } from 'app/shared/model/record';

export class FoodItem extends Record {

    constructor(
            public name: string,
            public calsPerGram: number,
            public carbsPerGram?: number,
            public fatPerGram?: number,
            public proteinPerGram?: number) {

        super();
    }
}
