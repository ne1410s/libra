import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassRecordDetailComponent } from './mass-record-detail.component';

describe('MassRecordDetailComponent', () => {
  let component: MassRecordDetailComponent;
  let fixture: ComponentFixture<MassRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
