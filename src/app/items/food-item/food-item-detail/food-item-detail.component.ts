import { Component, Input } from '@angular/core';

import { FoodItem } from '../food-item';

@Component({
  selector: 'app-food-item-detail',
  templateUrl: './food-item-detail.component.html',
  styleUrls: ['./food-item-detail.component.css']
})
export class FoodItemDetailComponent {
  @Input() foodItem: FoodItem;
}
