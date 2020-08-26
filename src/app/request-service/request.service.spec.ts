import { TestBed } from '@angular/core/testing';

import { ServiceRequest } from './service-request.service';

describe('ServiceRequest', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceRequest = TestBed.get(ServiceRequest);
    expect(service).toBeTruthy();
  });
});
