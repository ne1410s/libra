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

    const foods: FoodItem[] = [
      new FoodItem('Bread', 3),
      new FoodItem('Cheese', 5)
    ];

    const foodRecords: FoodRecord[] = [
      new FoodRecord(foods[0], 12),
      new FoodRecord(foods[1], 400),
    ];

    const recipes: Recipe[] = [
      // TODO!
    ];

    const exercises: ExerciseItem[] = [
      new ExerciseItem('Walking', 150),
      new ExerciseItem('Jogging', 600),
      new ExerciseItem('Running', 800),
      new ExerciseItem('Sprinting', 1000)
    ];

    const exerciseRecords: ExerciseRecord[] = [
      new ExerciseRecord(exercises[0], 165),
      new ExerciseRecord(exercises[1], 20),
    ];

    const massRecords: MassRecord[] = [
      new MassRecord(100, new Date(2017, 2, 22, 7, 30)),
      new MassRecord(96.343, new Date(2017, 3, 21, 7, 30)),
    ];

    MockDataService.applyIncrementalIds(foods);
    MockDataService.applyIncrementalIds(foodRecords);
    MockDataService.applyIncrementalIds(recipes);
    MockDataService.applyIncrementalIds(exercises);
    MockDataService.applyIncrementalIds(exerciseRecords);
    MockDataService.applyIncrementalIds(massRecords);

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
