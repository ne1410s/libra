import { Component } from '@angular/core';

import { MassRecord } from '../mass-record';
import { DetailBase } from 'app/shared/model/detail-base';

@Component({
  selector: 'app-mass-record-detail',
  templateUrl: './mass-record-detail.component.html',
  styleUrls: ['../../../shared/styles/item-detail.css']
})
export class MassRecordDetailComponent extends DetailBase<MassRecord> {}
