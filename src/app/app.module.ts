import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import 'reflect-metadata';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ExerciseRecordService } from './records/exercise-record/exercise-record.service';
import { FoodRecordService } from './records/food-record/food-record.service';
import { MassRecordService } from './records/mass-record/mass-record.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    ExerciseRecordService,
    FoodRecordService,
    MassRecordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
