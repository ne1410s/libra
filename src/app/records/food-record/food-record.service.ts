import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { EntityDateCrudService } from 'app/shared/model/entity-date-crud-service.service';
import { FoodRecord } from './food-record';
import { FoodItem } from 'app/items/food-item/food-item';
import { FoodItemService } from 'app/items/food-item/food-item.service';

@Injectable()
export class FoodRecordService extends EntityDateCrudService<FoodRecord, FoodItem> {

  protected apiEntityPath = 'foodRecords';

  constructor(http: Http, crudService: FoodItemService) {
    super(http, crudService);
  }
}
