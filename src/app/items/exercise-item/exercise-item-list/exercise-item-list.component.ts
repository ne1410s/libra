import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Column } from 'app/shared/table/table.component';
import { ExerciseItem } from '../exercise-item';
import { ExerciseItemService } from '../exercise-item.service';

@Component({
  selector: 'app-exercise-item-list',
  templateUrl: './exercise-item-list.component.html',
  styleUrls: ['./exercise-item-list.component.css']
})
export class ExerciseItemListComponent implements OnInit {

  exerciseItems: Observable<ExerciseItem[]>;
  columns: Column[];

  constructor(
    private router: Router,
    private exerciseItemService: ExerciseItemService) { }

  ngOnInit() {
    this.exerciseItems = this.exerciseItemService.list();
    this.columns = [
      new Column('name', 'Name'),
      new Column('calsPerHour', 'Burn Rate', '25%', v => v + ' kCal/hr')
    ];
  }

  onRowClicked(exerciseItem: ExerciseItem): void {
    this.router.navigate([`/items/exercise/${exerciseItem.id}`]);
  }
}
