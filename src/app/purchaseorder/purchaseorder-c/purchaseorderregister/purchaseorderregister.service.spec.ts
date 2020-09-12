import { TestBed } from '@angular/core/testing';

import { PurchaseorderregisterService } from './purchaseorderregister.service';

describe('PurchaseorderregisterService', () => {
  let service: PurchaseorderregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseorderregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
