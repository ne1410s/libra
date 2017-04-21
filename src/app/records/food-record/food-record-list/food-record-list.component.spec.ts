import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecordListComponent } from './food-record-list.component';

describe('FoodRecordListComponent', () => {
  let component: FoodRecordListComponent;
  let fixture: ComponentFixture<FoodRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
