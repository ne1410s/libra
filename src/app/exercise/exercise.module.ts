import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseService } from './exercise.service';
import { ExerciseRecordService } from './exercise-record.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ExerciseService,
    ExerciseRecordService
  ]
})
export class ExerciseModule { }
