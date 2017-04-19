import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Exercise } from 'app/exercise/exercise';
import { ExerciseService } from 'app/exercise/exercise.service';

import { FoodItem } from 'app/food/food-item';
import { FoodItemService } from 'app/food/food-item.service';

import { ExerciseRecord } from 'app/exercise/exercise-record';
import { ExerciseRecordService } from 'app/exercise/exercise-record.service';

import { FoodRecord } from 'app/food/food-record';
import { FoodRecordService } from 'app/food/food-record.service';

import { MassRecord } from 'app/mass/mass-record';
import { MassRecordService } from 'app/mass/mass-record.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public exercises: Observable<Exercise[]>;
  public foodItems: Observable<FoodItem[]>;

  public exerciseRecords: Observable<ExerciseRecord[]>;
  public foodRecords: Observable<FoodRecord[]>;

  constructor(
      private exerciseService: ExerciseService,
      private foodItemService: FoodItemService,
      private foodRecordService: FoodRecordService,
      private exerciseRecordService: ExerciseRecordService,
      private massRecordService: MassRecordService) { }

  ngOnInit() {
    this.exercises = this.exerciseService.list();
    this.foodItems = this.foodItemService.list();
    this.exerciseRecords = this.exerciseRecordService.list();
  }
}
