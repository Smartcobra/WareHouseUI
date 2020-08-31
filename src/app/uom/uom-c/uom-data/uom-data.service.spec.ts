import { TestBed } from '@angular/core/testing';

import { UomDataService } from './uom-data.service';

describe('UomDataService', () => {
  let service: UomDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UomDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
