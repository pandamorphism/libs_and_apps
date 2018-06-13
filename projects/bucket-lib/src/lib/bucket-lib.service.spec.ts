import { TestBed, inject } from '@angular/core/testing';

import { BucketLibService } from './bucket-lib.service';

describe('BucketLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketLibService]
    });
  });

  it('should be created', inject([BucketLibService], (service: BucketLibService) => {
    expect(service).toBeTruthy();
  }));
});
