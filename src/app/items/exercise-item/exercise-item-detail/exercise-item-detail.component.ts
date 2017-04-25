import { Component, Input } from '@angular/core';

import { ExerciseItem } from '../exercise-item';

@Component({
  selector: 'app-exercise-item-detail',
  templateUrl: './exercise-item-detail.component.html',
  styleUrls: ['./exercise-item-detail.component.css']
})
export class ExerciseItemDetailComponent {
  @Input() exerciseItem: ExerciseItem;
}
