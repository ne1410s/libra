import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseItemListComponent } from './exercise-item-list.component';

describe('ExerciseItemListComponent', () => {
  let component: ExerciseItemListComponent;
  let fixture: ComponentFixture<ExerciseItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
