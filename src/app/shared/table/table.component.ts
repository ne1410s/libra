import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() records: Observable<any[]>;
  @Output() onRowClicked = new EventEmitter<any>();

  keys: string[];

  ngOnInit(): void {
    this.records.subscribe(records => {
      this.keys = Object.keys(records[0]).filter(key => key.toLowerCase() !== 'id');
    });
  }

  rowClicked(record: any): void {
    this.onRowClicked.emit(record);
  }
}
