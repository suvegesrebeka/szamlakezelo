import { TestBed } from '@angular/core/testing';

import { ReceiptdataService } from './receiptdata.service';

describe('ReceiptdataService', () => {
  let service: ReceiptdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiptdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
