import { TestBed, inject } from '@angular/core/testing';

import { ExerciseItemService } from './exercise-item.service';

describe('ExerciseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseItemService]
    });
  });

  it('should ...', inject([ExerciseItemService], (service: ExerciseItemService) => {
    expect(service).toBeTruthy();
  }));
});
