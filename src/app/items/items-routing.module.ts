import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from 'app/shared/not-found/not-found.component';
import { ItemsSummaryComponent } from './items-summary/items-summary.component';
import { ExerciseItemListComponent } from './exercise-item/exercise-item-list/exercise-item-list.component';
import { FoodItemListComponent } from './food-item/food-item-list/food-item-list.component';
import { ExerciseItemDetailComponent } from './exercise-item/exercise-item-detail/exercise-item-detail.component';
import { FoodItemDetailComponent } from './food-item/food-item-detail/food-item-detail.component';

const itemRoutes: Routes = [{
  path: '',
  component: ItemsSummaryComponent,
  // Nesting routes like this allows the summary component to serve as a router 'template'
  // Could specify the below *alongside* the summary instead, but then its html will not be shared
  children: [
    { path: 'exercise', component: ExerciseItemListComponent },
    { path: 'exercise/:id', component: ExerciseItemDetailComponent },
    { path: 'food', component: FoodItemListComponent },
    { path: 'food/:id', component: FoodItemDetailComponent },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(itemRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ItemsRoutingModule { }
