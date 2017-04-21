import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit {

  foodItems: Observable<FoodItem[]>;

  constructor(
    private router: Router,
    private foodItemService: FoodItemService) { }

  ngOnInit() {
    this.foodItems = this.foodItemService.list();
  }

  onRowClicked(foodItem: FoodItem): void {
    this.router.navigate([`/items/food/${foodItem.id}`]);
  }
}
