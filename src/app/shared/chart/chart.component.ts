import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Period } from 'app/shared/model/date-crud-service.service';

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

  public exerciseRecords: Observable<ExerciseRecord[]>;
  public foodRecords: Observable<FoodRecord[]>;
  public massRecords: Observable<MassRecord[]>;

  get periodDescription(): string {
    return MassRecordService.getPeriodDescription(this.period, this.offset);
  }

  chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  chartOptions: any = { maintainAspectRatio: false };
  chartDatasets: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'},
  ];

  constructor(
      private foodRecordService: FoodRecordService,
      private exerciseRecordService: ExerciseRecordService,
      private massRecordService: MassRecordService) { }

  ngOnInit(): void {
    this.applyRangeFilter();
  }

  onOffsetChanged(offset: number): void {
    this.offset = offset;
    this.applyRangeFilter();
  }

  onPeriodChanged(period: Period): void {
    this.offset = 0;
    this.period = period;
    this.applyRangeFilter();
  }

  /** Entrusts the service with caching, etc. */
  applyRangeFilter(): void {
    this.exerciseRecords = this.exerciseRecordService.listForPeriod(this.period, this.offset);
    this.foodRecords = this.foodRecordService.listForPeriod(this.period, this.offset);
    this.massRecords = this.massRecordService.listForPeriod(this.period, this.offset);
  }

  chartClicked(e: any): void {
    console.log(e);
  }
}
