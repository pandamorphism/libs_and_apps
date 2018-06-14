import { TestBed, inject } from '@angular/core/testing';

import { ApplesProviderService } from './apples-provider.service';

describe('ApplesProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplesProviderService]
    });
  });

  it('should be created', inject([ApplesProviderService], (service: ApplesProviderService) => {
    expect(service).toBeTruthy();
  }));
});
