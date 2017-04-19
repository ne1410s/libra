import { TestBed, inject } from '@angular/core/testing';

import { ExerciseRecordService } from './exercise-record.service';

describe('ExerciseRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseRecordService]
    });
  });

  it('should ...', inject([ExerciseRecordService], (service: ExerciseRecordService) => {
    expect(service).toBeTruthy();
  }));
});
