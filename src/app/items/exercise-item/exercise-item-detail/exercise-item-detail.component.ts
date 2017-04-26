import { Component } from '@angular/core';

import { ExerciseItem } from '../exercise-item';
import { DetailBase } from 'app/shared/model/detail-base';

@Component({
  selector: 'app-exercise-item-detail',
  templateUrl: './exercise-item-detail.component.html',
  styleUrls: ['../../../shared/styles/item-detail.css']
})
export class ExerciseItemDetailComponent extends DetailBase<ExerciseItem> {}
