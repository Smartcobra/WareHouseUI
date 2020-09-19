import { TestBed } from '@angular/core/testing';

import { WhuserDataService } from './whuser-data.service';

describe('WhuserDataService', () => {
  let service: WhuserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhuserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
