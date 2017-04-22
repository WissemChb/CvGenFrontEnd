import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import {Http, BaseRequestOptions, ResponseOptions, Response, RequestOptions} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";

describe('LoginService', () => {
 let backend :any;
 let subject : any;
  let user = {
    username : 'wiss',
    password : 'wissem'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService,
        Http,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]}
          ]
    });
    backend = new MockBackend();

  });

beforeEach(inject([LoginService] , (loginService : LoginService)=>{
  subject = loginService;
}));

  it('should be created', () => {
    expect(subject).toBeTruthy();
  });

  it('Login method should be defined', () => {
    expect(subject.login).toBeDefined();
  });

  it('handlError method should be defined', () => {
    expect(subject.handleError).toBeDefined();
  });

  it('extractResponseData method should be defined', ()=> {
    expect(subject.extractResponseData).toBeDefined();
  });

  it('should url contains http://localhost:5000  ',() => {
    expect(subject.url).toContain('http://localhost:5000')
  });

  it('Loginshould call end point and return it\'s result',() => {
    backend.connections.subscribe((connection  : MockConnection ) => {
      let options = new ResponseOptions({
        body : JSON.stringify({success : true})
      });
      connection.mockRespond(new Response(options));
    });
    subject.login(user)
      .subscribe((response) => {
        expect(response.json()).toEqual({success : true});
      })
  });

});
