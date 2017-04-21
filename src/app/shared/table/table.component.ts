import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() records: Observable<any[]>;
  @Input() title: string;
  @Input() maxWidth = '100%';
  @Output() onRowClicked = new EventEmitter<any>();

  keys: string[] = [ 'Loading' ];

  ngOnInit(): void {
    this.records.subscribe(records => {
      this.keys = Object.keys(records[0]).filter(key => key !== 'id');
    });
  }

  rowClicked(record: any): void {
    this.onRowClicked.emit(record);
  }
}
