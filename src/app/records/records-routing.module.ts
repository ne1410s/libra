import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from 'app/shared/not-found/not-found.component';
import { RecordsSummaryComponent } from './records-summary/records-summary.component';
import { ExerciseRecordListComponent } from './exercise-record/exercise-record-list/exercise-record-list.component';
import { FoodRecordListComponent } from './food-record/food-record-list/food-record-list.component';
import { MassRecordListComponent } from './mass-record/mass-record-list/mass-record-list.component';
import { ExerciseRecordDetailComponent } from './exercise-record/exercise-record-detail/exercise-record-detail.component';
import { FoodRecordDetailComponent } from './food-record/food-record-detail/food-record-detail.component';
import { MassRecordDetailComponent } from './mass-record/mass-record-detail/mass-record-detail.component';

const recordRoutes: Routes = [{
  path: '',
  component: RecordsSummaryComponent,
  // Nesting routes like this allows the summary component to serve as a router 'template'
  // Could specify the below *alongside* the summary instead, but then its html will not be shared
  children: [
    { path: 'exercise', component: ExerciseRecordListComponent },
    { path: 'exercise/:id', component: ExerciseRecordDetailComponent },
    { path: 'food', component: FoodRecordListComponent },
    { path: 'food/:id', component: FoodRecordDetailComponent },
    { path: 'mass', component: MassRecordListComponent },
    { path: 'mass/:id', component: MassRecordDetailComponent },
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(recordRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecordsRoutingModule { }
