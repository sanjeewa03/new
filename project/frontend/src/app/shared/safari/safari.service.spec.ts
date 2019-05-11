import { TestBed } from '@angular/core/testing';

import { SafariService } from './safari.service';

describe('SafariService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SafariService = TestBed.get(SafariService);
    expect(service).toBeTruthy();
  });
});
