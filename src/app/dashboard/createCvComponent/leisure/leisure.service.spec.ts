import { TestBed, inject } from '@angular/core/testing';

import { LeisureService } from './leisure.service';

describe('LeisureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeisureService]
    });
  });

  it('should ...', inject([LeisureService], (service: LeisureService) => {
    expect(service).toBeTruthy();
  }));
});
