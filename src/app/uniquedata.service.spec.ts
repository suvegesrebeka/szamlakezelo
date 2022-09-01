import { TestBed } from '@angular/core/testing';

import { UniquedataService } from './uniquedata.service';

describe('UniquedataService', () => {
  let service: UniquedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniquedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
