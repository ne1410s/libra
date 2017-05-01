import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { DateCrudService, Period } from 'app/shared/model/date-crud-service.service';
import { ExerciseRecord } from 'app/records/exercise-record/exercise-record';
import { ExerciseRecordService } from 'app/records/exercise-record/exercise-record.service';
import { FoodRecord } from 'app/records/food-record/food-record';
import { FoodRecordService } from 'app/records/food-record/food-record.service';
import { MassRecord } from 'app/records/mass-record/mass-record';
import { MassRecordService } from 'app/records/mass-record/mass-record.service';
import { ChartConfigService } from './chart-config.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public offset = 0;
  public period = Period.Year;
  public yMin = 100;
  public yMax = 100;

  public outCals: number;
  public inCals: number;

  get periodDescription(): string {
    return DateCrudService.getPeriodDescription(this.period, this.offset);
  }

  chartOptions: any;
  chartData = [{ data: [], label: 'Mass' }];

  constructor(
      private foodRecordService: FoodRecordService,
      private exerciseRecordService: ExerciseRecordService,
      private massRecordService: MassRecordService,
      private chartConfigService: ChartConfigService) { }

  ngOnInit(): void {
    this.massRecordService.list().subscribe(items => {
      const minMax = this.massRecordService.getMinMaxKilos(items);
      this.yMin = minMax[0];
      this.yMax = minMax[1];
      this.applyRangeFilter();
    });
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
    this.outCals = -1;
    this.inCals = -1;
    this.chartOptions = this.chartConfigService.getOptions(
      this.periodDescription, this.period, this.offset, this.yMin, this.yMax);

    this.massRecordService
      .listForPeriod(this.period, this.offset, 1)
      .subscribe(items => {
        this.chartData = [{
          data: items.map(m => { return { x: m.recorded, y: m.kilos }; }),
          label: 'Mass',
        }];
      });

    this.exerciseRecordService
      .listForPeriod(this.period, this.offset)
      .subscribe(records => {
        if (records.length === 0) {
          this.outCals = 0;
        } else {
          Observable.forkJoin(records.map(i => i.entity)).subscribe(items => {
            this.outCals = Math.round(records.reduce((tot, cur, i) => {
              const entity = items.find(item => item.id === cur.entityId);
              return tot + entity.calsPerHour * cur.minutes / 60;
            }, 0));
          });
        }
      });

    this.foodRecordService
      .listForPeriod(this.period, this.offset)
      .subscribe(records => {
        if (records.length === 0) {
          this.inCals = 0;
        } else {
          Observable.forkJoin(records.map(i => i.entity)).subscribe(items => {
            this.inCals = Math.round(records.reduce((tot, cur, i) => {
              const entity = items.find(item => item.id === cur.entityId);
              return tot + entity.calsPerGram * cur.grams;
            }, 0));
          });
        }
      });
  }
}
