import { TestBed, inject } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions, Http} from "@angular/http";

describe('DashboardService', () => {
  let mockbackend : MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardService,Http,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]}]
    });
    mockbackend = new MockBackend();
  });

  it('should create Dashboard Service', inject([DashboardService], (service: DashboardService) => {
    expect(service).toBeTruthy();
  }));
});
