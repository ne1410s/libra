import { Component } from '@angular/core';

import { EntityDetail } from 'app/shared/model/entity-detail';
import { FoodItem } from 'app/items/food-item/food-item';
import { FoodItemService } from 'app/items/food-item/food-item.service';
import { FoodRecord } from '../food-record';

@Component({
  selector: 'app-food-record-detail',
  templateUrl: './food-record-detail.component.html',
  styleUrls: ['../../../shared/styles/item-detail.css']
})
export class FoodRecordDetailComponent extends EntityDetail<FoodRecord, FoodItem> {

  constructor(protected crudService: FoodItemService) {
    super(crudService);
  }
}
