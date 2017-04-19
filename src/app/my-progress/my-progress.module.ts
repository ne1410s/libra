import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseModule } from 'app/exercise/exercise.module';
import { FoodModule } from 'app/food/food.module';
import { MassModule } from 'app/mass/mass.module';

@NgModule({
  imports: [
    CommonModule,
    ExerciseModule,
    FoodModule,
    MassModule
  ],
  declarations: []
})
export class MyProgressModule { }
