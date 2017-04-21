import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassRecordListComponent } from './mass-record-list.component';

describe('MassRecordListComponent', () => {
  let component: MassRecordListComponent;
  let fixture: ComponentFixture<MassRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
