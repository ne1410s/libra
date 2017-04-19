import { TestBed, inject } from '@angular/core/testing';

import { QueryStringService } from './query-string.service';

describe('QueryStringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueryStringService]
    });
  });

  it('should ...', inject([QueryStringService], (service: QueryStringService) => {
    expect(service).toBeTruthy();
  }));
});
