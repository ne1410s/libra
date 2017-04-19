import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CrudService } from 'app/shared/crud-service.service';
import { FoodItem } from './food-item';

@Injectable()
export class FoodItemService extends CrudService<FoodItem> {

  protected apiEntityPath = 'foodItems';

  constructor(protected http: Http) {
    super(http);
  }
}
