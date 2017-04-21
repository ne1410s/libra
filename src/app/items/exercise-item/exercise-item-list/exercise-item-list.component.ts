import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ExerciseItem } from '../exercise-item';
import { ExerciseItemService } from '../exercise-item.service';

@Component({
  selector: 'app-exercise-item-list',
  templateUrl: './exercise-item-list.component.html',
  styleUrls: ['./exercise-item-list.component.css']
})
export class ExerciseItemListComponent implements OnInit {

  exercises: Observable<ExerciseItem[]>;

  constructor(
    private exerciseItemService: ExerciseItemService) { }

  ngOnInit() {
    this.exercises = this.exerciseItemService.list();
  }
}
