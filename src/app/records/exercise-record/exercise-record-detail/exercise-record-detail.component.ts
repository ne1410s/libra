import { Component } from '@angular/core';

import { ExerciseRecord } from '../exercise-record';
import { DetailBase } from 'app/shared/model/detail-base';

@Component({
  selector: 'app-exercise-record-detail',
  templateUrl: './exercise-record-detail.component.html',
  styleUrls: ['../../../shared/styles/item-detail.css']
})
export class ExerciseRecordDetailComponent extends DetailBase<ExerciseRecord> {}

