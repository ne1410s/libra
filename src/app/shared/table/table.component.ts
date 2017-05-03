import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

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
  @Input() pageSize = 5;
  @Output() onRowClicked = new EventEmitter<any>();
  @Output() onDeleteClicked = new EventEmitter<any>();
  @Output() onPopupClosed = new EventEmitter<any>();
  @Output() onRecordCreated = new EventEmitter<any>();

  viewRecord: any;
  newRecord: any;

  valueCheck: string;
  currentPage = 1;
  totalPages: number;

  get sliceStart(): number {
    return (this.currentPage - 1) * this.pageSize;
  }

  get sliceEnd(): number {
    return this.sliceStart + this.pageSize;
  }

  ngOnInit(): void {
    this.records.subscribe(records => {
      this.totalPages = Math.ceil(records.length / this.pageSize);
      if ((!this.columns || this.columns.length === 0) && records.length !== 0) {
        this.columns = Object.keys(records[0]).map(k => new Column(k));
      }
    });
  }

  rowClicked(record: any): void {
    this.onRowClicked.emit(record);
    this.viewRecord = record;
    this.valueCheck = JSON.stringify(record, (key, val) => { return key !== 'entity' ? val : null; });
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
    const recordJson = JSON.stringify(this.viewRecord, (key, val) => { return key !== 'entity' ? val : null; });
    this.viewRecord.__dirty = recordJson !== this.valueCheck;
    this.onPopupClosed.emit(this.viewRecord);
    this.viewRecord = null;
    this.valueCheck = null;

    this.records.subscribe(records => {
      this.totalPages = Math.ceil(records.length / this.pageSize);
    });
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
      case SortMode.Descending:
        this.sortMode = SortMode.Ascending;
        break;
      case SortMode.None:
        this.sortMode = this.initialSort;
        break;
    }

    records.sort((a, b) => a[this.objectKey] < b[this.objectKey] ? -1 : a[this.objectKey] > b[this.objectKey] ? 1 : 0);
    if (this.sortMode === SortMode.Descending) { records.reverse(); };
    return records;
  }

  constructor(
    public objectKey: string,
    public displayName?: string,
    public preferredWidth = '25%',
    public valueCallback?: (val: any, obj: any) => any,
    public initialSort = SortMode.Ascending) {}
}
