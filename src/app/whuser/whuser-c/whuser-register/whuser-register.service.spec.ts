import { TestBed } from '@angular/core/testing';

import { WhuserRegisterService } from './whuser-register.service';

describe('WhuserRegisterService', () => {
  let service: WhuserRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhuserRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
