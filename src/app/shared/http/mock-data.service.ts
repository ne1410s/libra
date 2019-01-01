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
      new MassRecord(86.8, new Date(2019, 1, 1, 9, 0)),
      //
    ];

    MockDataService.applyIncrementalIds(exercises);
    MockDataService.applyIncrementalIds(foods);
    MockDataService.applyIncrementalIds(massRecords);

    const recipes: Recipe[] = [
      // TODO!
    ];

    const exerciseRecords: ExerciseRecord[] = [
      new ExerciseRecord(3, 20, new Date(2019, 1, 2, 12, 20)),
      //
    ];

    const foodRecords: FoodRecord[] = [
      //
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
