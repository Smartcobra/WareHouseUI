import { TestBed } from '@angular/core/testing';

import { GrnRegisterService } from './grn-register.service';

describe('GrnRegisterService', () => {
  let service: GrnRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrnRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
