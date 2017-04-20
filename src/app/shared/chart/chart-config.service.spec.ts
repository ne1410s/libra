import { TestBed, inject } from '@angular/core/testing';

import { ChartConfigService } from './chart-config.service';

describe('ChartConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartConfigService]
    });
  });

  it('should ...', inject([ChartConfigService], (service: ChartConfigService) => {
    expect(service).toBeTruthy();
  }));
});
