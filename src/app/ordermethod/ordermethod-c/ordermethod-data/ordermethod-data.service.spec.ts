import { TestBed } from '@angular/core/testing';

import { OrdermethodDataService } from './ordermethod-data.service';

describe('OrdermethodDataService', () => {
  let service: OrdermethodDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdermethodDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
