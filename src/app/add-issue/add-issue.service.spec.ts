import { TestBed } from '@angular/core/testing';

import { AddIssueService } from './add-issue.service';

describe('AddIssueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddIssueService = TestBed.get(AddIssueService);
    expect(service).toBeTruthy();
  });
});
