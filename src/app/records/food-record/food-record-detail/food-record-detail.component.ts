import { Component, Input } from '@angular/core';

import { FoodRecord } from '../food-record';

@Component({
  selector: 'app-food-record-detail',
  templateUrl: './food-record-detail.component.html',
  styleUrls: ['./food-record-detail.component.css']
})
export class FoodRecordDetailComponent {
  @Input() foodRecord: FoodRecord;
}
