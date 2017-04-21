import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { FoodRecord } from '../food-record';
import { FoodRecordService } from '../food-record.service';

@Component({
  selector: 'app-food-record-list',
  templateUrl: './food-record-list.component.html',
  styleUrls: ['./food-record-list.component.css']
})
export class FoodRecordListComponent implements OnInit {

 foodRecords: Observable<FoodRecord[]>;

  constructor(
    private router: Router,
    private foodRecordService: FoodRecordService) { }

  ngOnInit() {
    this.foodRecords = this.foodRecordService.list();
  }

  onRowClicked(foodRecord: FoodRecord): void {
    this.router.navigate([`/records/food/${foodRecord.id}`]);
  }
}
