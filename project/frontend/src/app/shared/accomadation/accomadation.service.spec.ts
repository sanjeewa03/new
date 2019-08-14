import { TestBed } from '@angular/core/testing';

import { AccomadationService } from './accomadation.service';

describe('PlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccomadationService  = TestBed.get(AccomadationService );
    expect(service).toBeTruthy();
  });
});
