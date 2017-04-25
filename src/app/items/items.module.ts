import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from 'app/shared/shared.module';

import { ItemsSummaryComponent } from './items-summary/items-summary.component';

import { ExerciseItemService } from './exercise-item/exercise-item.service';
import { FoodItemService } from './food-item/food-item.service';
import { ExerciseItemListComponent } from './exercise-item/exercise-item-list/exercise-item-list.component';
import { FoodItemListComponent } from './food-item/food-item-list/food-item-list.component';
import { ExerciseItemDetailComponent } from './exercise-item/exercise-item-detail/exercise-item-detail.component';
import { FoodItemDetailComponent } from './food-item/food-item-detail/food-item-detail.component';
import { TableComponent } from 'app/shared/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule,
    SharedModule
  ],
  declarations: [
    ItemsSummaryComponent,
    ExerciseItemDetailComponent,
    ExerciseItemListComponent,
    FoodItemDetailComponent,
    FoodItemListComponent,
  ],
  // Item services are not required globally: hence limited to this module
  providers: [
    ExerciseItemService,
    FoodItemService,
  ],
})
export class ItemsModule { }
