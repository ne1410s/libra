import { TestBed, inject } from '@angular/core/testing';

import { MassRecordService } from './mass-record.service';

describe('MassRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MassRecordService]
    });
  });

  it('should ...', inject([MassRecordService], (service: MassRecordService) => {
    expect(service).toBeTruthy();
  }));
});
