import { TestBed } from '@angular/core/testing';

import { PartRegisterService } from './part-register.service';

describe('PartRegisterService', () => {
  let service: PartRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
