import { TestBed } from '@angular/core/testing';

import { UpdateApprovalService } from './update-approval.service';

describe('UpdateApprovalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateApprovalService = TestBed.get(UpdateApprovalService);
    expect(service).toBeTruthy();
  });
});
