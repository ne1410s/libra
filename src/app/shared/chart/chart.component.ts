import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { QueryStringService, QSRangeParam } from 'app/shared/http/query-string.service';
import { Period } from 'app/shared/model/date-crud-service.service';

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

  public offset = 0;
  public period = Period.Year;

  public exercises: Observable<Exercise[]>;
  public foodItems: Observable<FoodItem[]>;
  public exerciseRecords: Observable<ExerciseRecord[]>;
  public foodRecords: Observable<FoodRecord[]>;
  public massRecords: Observable<MassRecord[]>;

  constructor(
      private exerciseService: ExerciseService,
      private foodItemService: FoodItemService,
      private foodRecordService: FoodRecordService,
      private exerciseRecordService: ExerciseRecordService,
      private massRecordService: MassRecordService,
      private qsService: QueryStringService) { }

  ngOnInit() {
    this.exercises = this.exerciseService.list();
    this.foodItems = this.foodItemService.list();
    this.exerciseRecords = this.exerciseRecordService.listForPeriod(this.period, this.offset);
    this.foodRecords = this.foodRecordService.listForPeriod(this.period, this.offset);
    this.massRecords = this.massRecordService.listForPeriod(this.period, this.offset);
  }
}
