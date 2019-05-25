import { TestBed } from '@angular/core/testing';

import { TouristDataResolverService } from './tourist-data-resolver.service';

describe('TouristDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TouristDataResolverService = TestBed.get(TouristDataResolverService);
    expect(service).toBeTruthy();
  });
});
