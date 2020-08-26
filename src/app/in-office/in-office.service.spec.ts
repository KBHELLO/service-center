import { TestBed } from '@angular/core/testing';

import { InOfficeService } from './in-office.service';

describe('InOfficeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InOfficeService = TestBed.get(InOfficeService);
    expect(service).toBeTruthy();
  });
});
