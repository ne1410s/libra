import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodRecordDetailComponent } from './food-record-detail.component';

describe('FoodRecordDetailComponent', () => {
  let component: FoodRecordDetailComponent;
  let fixture: ComponentFixture<FoodRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodRecordDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
