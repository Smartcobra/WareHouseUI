import { TestBed } from '@angular/core/testing';

import { PurchaseorderdataService } from './purchaseorderdata.service';

describe('PurchaseorderdataService', () => {
  let service: PurchaseorderdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseorderdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
