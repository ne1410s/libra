import { Component } from '@angular/core';

import { FoodRecord } from '../food-record';
import { DetailBase } from 'app/shared/model/detail-base';

@Component({
  selector: 'app-food-record-detail',
  templateUrl: './food-record-detail.component.html',
  styleUrls: ['../../../shared/styles/item-detail.css']
})
export class FoodRecordDetailComponent extends DetailBase<FoodRecord> {}
