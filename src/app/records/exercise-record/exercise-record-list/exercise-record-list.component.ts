import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Column } from 'app/shared/table/table.component';
import { ExerciseRecord } from '../exercise-record';
import { ExerciseRecordService } from '../exercise-record.service';

@Component({
  selector: 'app-exercise-record-list',
  templateUrl: './exercise-record-list.component.html',
  styleUrls: ['./exercise-record-list.component.css']
})
export class ExerciseRecordListComponent implements OnInit {

  exerciseRecords: Observable<ExerciseRecord[]>;
  columns: Column[];

  constructor(
    private router: Router,
    private exerciseRecordService: ExerciseRecordService) { }

  ngOnInit() {
    this.exerciseRecords = this.exerciseRecordService.list();
    this.columns = [
      new Column('recorded', 'Recorded On', '25%', v => {
        const recorded = new Date(v);
        return recorded.toLocaleDateString() + ' @ ' + recorded.toLocaleTimeString();
      }),
      new Column('entity', 'Exercise', '25%', v => v.name),
      new Column('minutes', 'Duration', '25%', v => v + ' mins'),
    ];
  }

  onRowClicked(exerciseRecord: ExerciseRecord): void {
    this.router.navigate([`/records/exercise/${exerciseRecord.id}`]);
  }

}
