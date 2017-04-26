import { Component } from '@angular/core';

import { Column } from 'app/shared/table/table.component';
import { FoodItem } from '../food-item';
import { FoodItemService } from '../food-item.service';
import { ListBase } from 'app/shared/model/list-base';

@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html'
})
export class FoodItemListComponent extends ListBase<FoodItem> {

  constructor(protected crudService: FoodItemService) {
    super(crudService);
  }

  initColumns(): void {
    this.columns = [
      new Column('name', 'Name'),
      new Column('calsPerGram', 'Calories', '25%', v => v + ' kCal/g'),
      new Column('carbsPerGram', 'Carbs', '25%', v => v + ' g/g'),
      new Column('fatPerGram', 'Fat', '25%', v => v + ' g/g'),
      new Column('proteinPerGram', 'Protein', '25%', v => v + ' g/g')
    ];
  }
}
