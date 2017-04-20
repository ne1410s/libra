import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Record } from 'app/shared/model/record';
import { FoodItem } from 'app/food/food-item';
import { FoodRecord } from 'app/food/food-record';
import { Exercise } from 'app/exercise/exercise';
import { ExerciseRecord } from 'app/exercise/exercise-record';
import { MassRecord } from 'app/mass/mass-record';
import { Recipe } from 'app/food/recipe';

@Injectable()
export class MockDataService implements InMemoryDbService {

  private static applyIncrementalIds(records: Record[]) {
    records.forEach((record, i) => record.id = i + 1);
  }

  createDb() {

    const foods: FoodItem[] = [
      new FoodItem('Bread', 300),
      new FoodItem('Cheese', 424)
    ];

    const foodRecords: FoodRecord[] = [
      new FoodRecord(foods[0], 12),
      new FoodRecord(foods[1], 400),
    ];

    const recipes: Recipe[] = [
      // TODO!
    ];

    const exercises: Exercise[] = [
      new Exercise('Walking', 150),
      new Exercise('Jogging', 600),
      new Exercise('Running', 800),
      new Exercise('Sprinting', 1000)
    ];

    const exerciseRecords: ExerciseRecord[] = [
      new ExerciseRecord(exercises[0], 800),
      new ExerciseRecord(exercises[1], 100),
    ];

    const massRecords: MassRecord[] = [
      new MassRecord(104, new Date(2016, 11, 31, 6, 45)),
      new MassRecord(110, new Date(2017, 0, 31, 8)),
      new MassRecord(112, new Date(2017, 1, 28, 7, 30)),
      new MassRecord(111, new Date(2017, 2, 31, 7)),
      new MassRecord(110.5, new Date(2017, 3, 30, 8)),
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
