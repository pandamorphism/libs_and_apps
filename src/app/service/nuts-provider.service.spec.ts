import { TestBed, inject } from '@angular/core/testing';

import { NutsProviderService } from './nuts-provider.service';

describe('NutsProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutsProviderService]
    });
  });

  it('should be created', inject([NutsProviderService], (service: NutsProviderService) => {
    expect(service).toBeTruthy();
  }));
});
