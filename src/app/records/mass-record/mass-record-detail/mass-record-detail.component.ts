import { Component, Input } from '@angular/core';

import { MassRecord } from '../mass-record';

@Component({
  selector: 'app-mass-record-detail',
  templateUrl: './mass-record-detail.component.html',
  styleUrls: ['./mass-record-detail.component.css']
})
export class MassRecordDetailComponent {
  @Input() massRecord: MassRecord;
}
