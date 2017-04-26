import { Component } from '@angular/core';

import { FoodItem } from '../food-item';
import { DetailBase } from 'app/shared/model/detail-base';

@Component({
  selector: 'app-food-item-detail',
  templateUrl: './food-item-detail.component.html',
  styleUrls: ['../../../shared/styles/item-detail.css']
})
export class FoodItemDetailComponent extends DetailBase<FoodItem> {}
