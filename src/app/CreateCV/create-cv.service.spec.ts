import { TestBed, inject } from '@angular/core/testing';

import { CreateCVService } from './create-cv.service';

describe('CreateCVService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateCVService]
    });
  });

  it('should ...', inject([CreateCVService], (service: CreateCVService) => {
    expect(service).toBeTruthy();
  }));
});
