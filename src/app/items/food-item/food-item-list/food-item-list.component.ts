import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Column } from 'app/shared/table/table.component';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';

@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit {

  viewRecord: FoodItem;
  foodItems: Observable<FoodItem[]>;
  columns: Column[];

  constructor(
    private foodItemService: FoodItemService) { }

  ngOnInit() {
    this.foodItems = this.foodItemService.list();
    this.columns = [
      new Column('name', 'Name'),
      new Column('calsPerGram', 'Calories', '25%', v => v + ' kCal/g'),
      new Column('carbsPerGram', 'Carbs', '25%', v => v + ' g/g'),
      new Column('fatPerGram', 'Fat', '25%', v => v + ' g/g'),
      new Column('proteinPerGram', 'Protein', '25%', v => v + ' g/g')
    ];
  }

  onRowClicked(foodItem: FoodItem): void {
    this.viewRecord = foodItem;
  }
}
