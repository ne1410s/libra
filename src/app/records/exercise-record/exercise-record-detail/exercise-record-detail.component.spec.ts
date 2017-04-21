import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseRecordDetailComponent } from './exercise-record-detail.component';

describe('ExerciseRecordDetailComponent', () => {
  let component: ExerciseRecordDetailComponent;
  let fixture: ComponentFixture<ExerciseRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
