import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsSummaryComponent } from './records-summary.component';

describe('RecordsSummaryComponent', () => {
  let component: RecordsSummaryComponent;
  let fixture: ComponentFixture<RecordsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
