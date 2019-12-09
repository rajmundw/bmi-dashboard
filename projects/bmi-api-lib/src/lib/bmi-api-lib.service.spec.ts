import { TestBed } from '@angular/core/testing';

import { BmiApiLibService } from './bmi-api-lib.service';

describe('BmiApiLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmiApiLibService = TestBed.get(BmiApiLibService);
    expect(service).toBeTruthy();
  });
});
