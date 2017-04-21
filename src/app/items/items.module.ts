import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsSummaryComponent } from './items-summary/items-summary.component';

import { ExerciseItemService } from './exercise-item/exercise-item.service';
import { FoodItemService } from './food-item/food-item.service';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [
    ItemsSummaryComponent
  ],
  // Item services are not required globally: hence limited to this module
  providers: [
    ExerciseItemService,
    FoodItemService,
  ],
})
export class ItemsModule { }
