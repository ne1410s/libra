import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodItemService } from './food-item.service';
import { FoodRecordService } from './food-record.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    FoodItemService,
    FoodRecordService
  ]
})
export class FoodModule { }
