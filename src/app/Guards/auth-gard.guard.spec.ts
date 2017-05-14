import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGardGuard } from './auth-gard.guard';
import {LoginService} from "../authentication/login/login.service";
import {Http, ConnectionBackend, RequestOptions, BaseRequestOptions} from "@angular/http";
import {MockBackend} from "@angular/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {FlashMessagesService} from "angular2-flash-messages";

describe('AuthGardGuard', () => {
  let backend : MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule],
      providers: [AuthGardGuard, LoginService,Http,ConnectionBackend,MockBackend,BaseRequestOptions,FlashMessagesService,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]}]
    });
    backend = new MockBackend();
  });

  it('should ...', inject([AuthGardGuard], (guard: AuthGardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
