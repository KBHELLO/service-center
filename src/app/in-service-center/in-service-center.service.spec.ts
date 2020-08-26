import { TestBed } from '@angular/core/testing';

import { InServiceCenterService } from './in-service-center.service';

describe('InServiceCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InServiceCenterService = TestBed.get(InServiceCenterService);
    expect(service).toBeTruthy();
  });
});
