import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Record } from 'app/shared/model/record';
import { FoodItem } from 'app/items/food-item/food-item';
import { FoodRecord } from 'app/records/food-record/food-record';
import { ExerciseItem } from 'app/items/exercise-item/exercise-item';
import { ExerciseRecord } from 'app/records/exercise-record/exercise-record';
import { MassRecord } from 'app/records/mass-record/mass-record';
import { Recipe } from 'app/items/recipe/recipe';

@Injectable()
export class MockDataService implements InMemoryDbService {

  private static applyIncrementalIds(records: Record[]) {
    records.forEach((record, i) => record.id = i + 1);
  }

  createDb() {

    const exercises: ExerciseItem[] = [
      new ExerciseItem('Walking', 150),
      new ExerciseItem('Jogging', 600),
      new ExerciseItem('Running', 800),
      new ExerciseItem('Sprinting', 1000)
    ];

    const foods: FoodItem[] = [
      new FoodItem('Bread', 3),
      new FoodItem('Cheese', 5)
    ];

    const massRecords: MassRecord[] = [
      new MassRecord(102.4, new Date(2017, 2, 7, 6, 12)),
      new MassRecord(102.7, new Date(2017, 2, 22, 7, 30)),
      new MassRecord(101.3, new Date(2017, 3, 7, 8, 45)),
      new MassRecord(96.3, new Date(2017, 3, 21, 7, 30)),
      new MassRecord(95.9, new Date(2017, 4, 7, 10, 0)),
      new MassRecord(97.7, new Date(2017, 4, 22, 18, 0)),
      new MassRecord(97.0, new Date(2017, 5, 7, 9, 0)),
    ];

    MockDataService.applyIncrementalIds(exercises);
    MockDataService.applyIncrementalIds(foods);
    MockDataService.applyIncrementalIds(massRecords);

    const recipes: Recipe[] = [
      // TODO!
    ];

    const exerciseRecords: ExerciseRecord[] = [
      new ExerciseRecord(1, 165, new Date(2017, 4, 15, 9, 0)),
      new ExerciseRecord(2, 20, new Date(2017, 2, 20, 9, 0)),
    ];

    const foodRecords: FoodRecord[] = [
      new FoodRecord(1, 12, new Date(2017, 4, 20, 10, 0)),
      new FoodRecord(2, 400, new Date(2017, 5, 2, 19, 0)),
    ];

    MockDataService.applyIncrementalIds(recipes);
    MockDataService.applyIncrementalIds(exerciseRecords);
    MockDataService.applyIncrementalIds(foodRecords);

    return {
      foodRecords: foodRecords,
      foodItems: foods,
      recipes: recipes,
      exerciseRecords: exerciseRecords,
      exerciseItems: exercises,
      massRecords: massRecords,
    };
  }
}
