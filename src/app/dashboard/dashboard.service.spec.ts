import { TestBed, inject } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions, Http, ConnectionBackend, RequestOptions} from "@angular/http";

describe('DashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({

      providers: [DashboardService]
    });
  });

  it('should create Dashboard Service', inject([DashboardService], (service: DashboardService) => {
    expect(service).toBeTruthy();
  }));
});
