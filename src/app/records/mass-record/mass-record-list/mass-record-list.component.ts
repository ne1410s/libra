import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MassRecord } from '../mass-record';
import { MassRecordService } from '../mass-record.service';

@Component({
  selector: 'app-mass-record-list',
  templateUrl: './mass-record-list.component.html',
  styleUrls: ['./mass-record-list.component.css']
})
export class MassRecordListComponent implements OnInit {

  massRecords: Observable<MassRecord[]>;

  constructor(
    private router: Router,
    private massRecordService: MassRecordService) { }

  ngOnInit() {
    this.massRecords = this.massRecordService.list();
  }

  onRowClicked(massRecord: MassRecord): void {
    this.router.navigate([`/records/mass/${massRecord.id}`]);
  }
}
