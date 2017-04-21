import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ExerciseRecord } from '../exercise-record';
import { ExerciseRecordService } from '../exercise-record.service';

@Component({
  selector: 'app-exercise-record-list',
  templateUrl: './exercise-record-list.component.html',
  styleUrls: ['./exercise-record-list.component.css']
})
export class ExerciseRecordListComponent implements OnInit {

  exerciseRecords: Observable<ExerciseRecord[]>;

  constructor(
    private router: Router,
    private exerciseRecordService: ExerciseRecordService) { }

  ngOnInit() {
    this.exerciseRecords = this.exerciseRecordService.list();
  }

  onRowClicked(exerciseRecord: ExerciseRecord): void {
    this.router.navigate([`/records/exercise/${exerciseRecord.id}`]);
  }

}
