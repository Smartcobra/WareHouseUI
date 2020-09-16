import { TestBed } from '@angular/core/testing';

import { GrnDataService } from './grn-data.service';

describe('GrnDataService', () => {
  let service: GrnDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrnDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
