import { TestBed } from '@angular/core/testing';

import { OrdermethodRegisterService } from './ordermethod-register.service';

describe('OrdermethodRegisterService', () => {
  let service: OrdermethodRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdermethodRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
