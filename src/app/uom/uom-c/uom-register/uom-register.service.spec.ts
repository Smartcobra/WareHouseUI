import { TestBed } from '@angular/core/testing';

import { UomRegisterService } from './uom-register.service';

describe('UomRegisterService', () => {
  let service: UomRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UomRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
