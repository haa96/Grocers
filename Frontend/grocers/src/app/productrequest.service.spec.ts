import { TestBed } from '@angular/core/testing';

import { ProductrequestService } from './productrequest.service';

describe('ProductrequestService', () => {
  let service: ProductrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
