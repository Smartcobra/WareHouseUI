import { TestBed } from '@angular/core/testing';

import { ShipmenttypedataService } from './shipmenttypedata.service';

describe('ShipmenttypedataService', () => {
  let service: ShipmenttypedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmenttypedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
