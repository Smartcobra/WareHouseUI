import { TestBed } from '@angular/core/testing';

import { ShipmenttyperegisterService } from './shipmenttyperegister.service';

describe('ShipmenttyperegisterService', () => {
  let service: ShipmenttyperegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmenttyperegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
