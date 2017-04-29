import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() records: Observable<any[]>;
  @Input() columns: Column[];
  @Input() heading: string;
  @Input() maxWidth = '100%';
  @Input() showDelete = true;
  @Output() onRowClicked = new EventEmitter<any>();
  @Output() onDeleteClicked = new EventEmitter<any>();
  @Output() onPopupClosed = new EventEmitter<any>();
  @Output() onRecordCreated = new EventEmitter<any>();

  viewRecord: any;
  newRecord: any;

  viewRecordCheck: string;

  ngOnInit(): void {
    this.records.do(records => {
      if ((!this.columns || this.columns.length === 0) && records.length !== 0) {
        this.columns = Object.keys(records[0]).map(k => new Column(k));
      }
    });
  }

  rowClicked(record: any): void {
    this.onRowClicked.emit(record);
    this.viewRecord = record;
    this.viewRecordCheck = JSON.stringify(record);
  }

  sortBy(column: Column) {
    this.records = this.records.map(recs => {
      this.columns.forEach(c => c.sortMode = c.displayName === column.displayName ? column.sortMode : SortMode.None);
      return column.sortRecords(recs);
    });
  }

  addClicked(): void {
    this.newRecord = { id: -1 };
    this.onRecordCreated.emit(this.newRecord);

    // Simulate a row click to raise the dialog immediately
    this.rowClicked(this.newRecord);
  }

  deleteClicked(record: any): void {
    this.onDeleteClicked.emit(record);
  }

  popupClosed(event: any): void {
    this.newRecord = null;
    this.viewRecord.__dirty = JSON.stringify(this.viewRecord) !== this.viewRecordCheck;
    this.onPopupClosed.emit(this.viewRecord);
    this.viewRecord = null;
    this.viewRecordCheck = null;
  }
}

export enum SortMode { None, Ascending, Descending }

export class Column {

  sortMode: SortMode = SortMode.None;

  getValue(rowObject: any, noValue: string = '---'): any {
    const retVal = rowObject[this.objectKey];
      return retVal === undefined ? noValue :
        this.valueCallback == null ? retVal : this.valueCallback(retVal, rowObject);
  }

  get name(): string {
    return this.displayName || this.objectKey;
  }

  sortRecords(records: any[]): any[] {

    // Determine new mode to apply
    switch (this.sortMode) {
      case SortMode.Ascending:
        this.sortMode = SortMode.Descending;
        break;
      default:
        this.sortMode = SortMode.Ascending;
    }

    records.sort((a, b) => a[this.objectKey] < b[this.objectKey] ? -1 : a[this.objectKey] > b[this.objectKey] ? 1 : 0);
    if (this.sortMode === SortMode.Descending) { records.reverse(); };
    return records;
  }

  constructor(
    public objectKey: string,
    public displayName?: string,
    public preferredWidth = '25%',
    public valueCallback?: (val: any, obj: any) => any) {}
}
