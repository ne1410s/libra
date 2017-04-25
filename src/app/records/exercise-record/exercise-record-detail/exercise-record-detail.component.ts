import { Component, Input } from '@angular/core';

import { ExerciseRecord } from '../exercise-record';

@Component({
  selector: 'app-exercise-record-detail',
  templateUrl: './exercise-record-detail.component.html',
  styleUrls: ['./exercise-record-detail.component.css']
})
export class ExerciseRecordDetailComponent {
  @Input() exerciseRecord: ExerciseRecord;
}
