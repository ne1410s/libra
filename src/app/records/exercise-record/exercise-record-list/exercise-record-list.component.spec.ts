import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseRecordListComponent } from './exercise-record-list.component';

describe('ExerciseRecordListComponent', () => {
  let component: ExerciseRecordListComponent;
  let fixture: ComponentFixture<ExerciseRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
