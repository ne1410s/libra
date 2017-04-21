import { NgModule } from '@angular/core';

import { RecordsRoutingModule } from './records-routing.module';
import { RecordsSummaryComponent } from './records-summary/records-summary.component';
import { ExerciseRecordListComponent } from './exercise-record/exercise-record-list/exercise-record-list.component';
import { FoodRecordListComponent } from './food-record/food-record-list/food-record-list.component';
import { MassRecordListComponent } from './mass-record/mass-record-list/mass-record-list.component';
import { ExerciseRecordDetailComponent } from './exercise-record/exercise-record-detail/exercise-record-detail.component';
import { FoodRecordDetailComponent } from './food-record/food-record-detail/food-record-detail.component';
import { MassRecordDetailComponent } from './mass-record/mass-record-detail/mass-record-detail.component';

// import { ExerciseRecordService } from './exercise-record/exercise-record.service';
// import { FoodRecordService } from './food-record/food-record.service';
// import { MassRecordService } from './mass-record/mass-record.service';

@NgModule({
  imports: [
    RecordsRoutingModule
  ],
  declarations: [
    RecordsSummaryComponent,
    MassRecordListComponent,
    FoodRecordListComponent,
    ExerciseRecordListComponent,
    ExerciseRecordDetailComponent,
    FoodRecordDetailComponent,
    MassRecordDetailComponent
  ],
  // Record services are required globally: hence moved up to app.module
  // providers: [
  //   ExerciseRecordService,
  //   FoodRecordService,
  //   MassRecordService,
  // ]
})
export class RecordsModule { }
