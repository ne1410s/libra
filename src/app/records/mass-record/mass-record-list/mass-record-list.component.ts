import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Column } from 'app/shared/table/table.component';
import { MassRecord } from '../mass-record';
import { MassRecordService } from '../mass-record.service';

@Component({
  selector: 'app-mass-record-list',
  templateUrl: './mass-record-list.component.html',
  styleUrls: ['./mass-record-list.component.css']
})
export class MassRecordListComponent implements OnInit {

  viewRecord: MassRecord;
  massRecords: Observable<MassRecord[]>;
  columns: Column[];

  constructor(
    private router: Router,
    private massRecordService: MassRecordService) { }

  ngOnInit() {
    this.massRecords = this.massRecordService.list();
    this.columns = [
      new Column('recorded', 'Recorded On', '33%', v => {
        const recorded = new Date(v);
        return recorded.toLocaleDateString() + ' @ ' + recorded.toLocaleTimeString();
      }),
      new Column('kilos', 'Kg', '22%', v => `${v.toFixed(1)} kg`),
      new Column('kilos', 'Lb', '22%', v => {
        const lbs = v * 2.20462;
        return `${lbs.toFixed(1)} lb`;
      }),
      new Column('kilos', 'St', '22%', v => {
        const lbs = v * 2.20462;
        return `${Math.floor(lbs / 14)} st ${(lbs % 14).toFixed(1)} lb`;
      }),
    ];
  }

  onRowClicked(massRecord: MassRecord): void {
    this.viewRecord = massRecord;
  }
}
