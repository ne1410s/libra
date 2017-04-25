import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Column } from 'app/shared/table/table.component';
import { FoodRecord } from '../food-record';
import { FoodRecordService } from '../food-record.service';

@Component({
  selector: 'app-food-record-list',
  templateUrl: './food-record-list.component.html',
  styleUrls: ['./food-record-list.component.css']
})
export class FoodRecordListComponent implements OnInit {

 foodRecords: Observable<FoodRecord[]>;
 columns: Column[];

  constructor(
    private router: Router,
    private foodRecordService: FoodRecordService) { }

  ngOnInit() {
    this.foodRecords = this.foodRecordService.list();
    this.columns = [
      new Column('recorded', 'Recorded On', '25%', v => {
        const recorded = new Date(v);
        return recorded.toLocaleDateString() + ' @ ' + recorded.toLocaleTimeString();
      }),
      new Column('entity', 'Food', '25%', v => v.name),
      new Column('grams', 'Mass', '25%', v => v + ' g'),
    ];
  }

  onRowClicked(foodRecord: FoodRecord): void {
    this.router.navigate([`/records/food/${foodRecord.id}`]);
  }
}
