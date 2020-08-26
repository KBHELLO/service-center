import { TestBed } from '@angular/core/testing';

import { OutGoingService } from './out-going.service';

describe('OutGoingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutGoingService = TestBed.get(OutGoingService);
    expect(service).toBeTruthy();
  });
});
