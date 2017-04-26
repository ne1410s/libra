import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  viewRecord: any;

  @Input() records: Observable<any[]>;
  @Input() columns: Column[];
  @Input() heading: string;
  @Input() maxWidth = '100%';
  @Input() showDelete = true;
  @Output() onRowClicked = new EventEmitter<any>();
  @Output() onDeleteClicked = new EventEmitter<any>();
  @Output() onPopupClosed = new EventEmitter<any>();

  ngOnInit(): void {
    this.records.subscribe(records => {
      if ((!this.columns || this.columns.length === 0) && records.length !== 0) {
        this.columns = Object.keys(records[0]).map(k => new Column(k));
      }
    });
  }

  rowClicked(record: any): void {
    this.onRowClicked.emit(record);
    this.viewRecord = record;
  }

  addClicked(): void {
    console.log('Add clicked!');
  }

  deleteClicked(record: any): void {
    this.onDeleteClicked.emit(record);
  }

  popupClosed(event: any): void {
    this.onPopupClosed.emit(this.viewRecord);
    this.viewRecord = null;
  }
}

export class Column {

  getValue(rowObject: any, noValue: string = '---'): any {
    const retVal = rowObject[this.objectKey];
      return retVal === undefined ? noValue :
        this.valueCallback == null ? retVal : this.valueCallback(retVal);
  }

  get name(): string {
    return this.displayName || this.objectKey;
  }

  constructor(
    public objectKey: string,
    public displayName?: string,
    public preferredWidth = '25%',
    public valueCallback?: (val: any) => any) {}
}
