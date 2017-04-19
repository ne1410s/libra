import { TestBed, inject } from '@angular/core/testing';

import { FoodRecordService } from './food-record.service';

describe('FoodRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodRecordService]
    });
  });

  it('should ...', inject([FoodRecordService], (service: FoodRecordService) => {
    expect(service).toBeTruthy();
  }));
});
