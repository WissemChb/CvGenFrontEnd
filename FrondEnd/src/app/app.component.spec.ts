///<reference path="../../node_modules/@types/jasmine/index.d.ts"/>
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterLinkStubDirective, RouterOutletStubComponent} from "./testing/router-stubs";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {Http} from "@angular/http";
import {SignUpModule} from "./authentication/sign-up/sign-up.module";
import {LoginModule} from "./authentication/login/login.module";
import {AboutModule} from "./about/about.module";
import {RouterTestingModule} from "@angular/router/testing";
import {FlashMessagesModule} from "angular2-flash-messages";

describe('AppComponent & AppModule : ', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      imports : [SignUpModule,LoginModule,AboutModule, RouterTestingModule, FlashMessagesModule]
    }).compileComponents()

  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });
  it('should create AppComponent',() => {
    expect(component).toBeTruthy();
  });

  tests();

  //################## Tests  #############################

  function tests(){
    let links : RouterLinkStubDirective[];
    let linkDes : DebugElement[];

    beforeEach(() => {
      fixture.detectChanges();
      linkDes = fixture.debugElement
        .queryAll(By.directive(RouterLinkStubDirective));
      links  = linkDes
        .map( de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective)
    });

    it('should get RouterLinks from html tamplate' ,() => {
      const homeLink = links[0].linkParams[0];
      const TemplatesLink = links[1].linkParams[0];
      const aboutLink = links[2].linkParams[0];
      const loginLink = links[3].linkParams[0];
      const signupLink = links[4].linkParams[0];

      expect(homeLink).toBe('/home', '1st link should go to home page ');
      expect(TemplatesLink).toBe('/templates', '2nd link should go to Templates page ');
      expect(aboutLink).toBe('/about', '3rd link should go to About page ');
      expect(loginLink).toBe('/login', '4th link should go to Login page ');
      expect(signupLink).toBe('/signup', '5th link should go to Register page ');
    });

    it('should click navigation links in tamplate',() => {
      const homelinkDe = linkDes[0];
      const homeLink = links[0];
      const TemplatesLink = links[1];
      const templatesLinkDes = linkDes[1];
      const aboutLink = links[2];
      const aboutLinkDe = linkDes[2];
      const loginLink = links[3];
      const loginLinkDes = linkDes[3];
      const signupLinkDe = linkDes[4];
      const signupLink = links[4];
      expect(aboutLink.navigatedTo).toBeNull('About link should not have navigated yet');
      expect(TemplatesLink.navigatedTo).toBeNull('Template link should not have navigated yet');
      expect(loginLink.navigatedTo).toBeNull(' link should not have navigated yet');
      expect(signupLink.navigatedTo).toBeNull('Signup link should not have navigated yet');
      homelinkDe.triggerEventHandler('click',null);
      aboutLinkDe.triggerEventHandler('click',null);
      templatesLinkDes.triggerEventHandler('click',null);
      loginLinkDes.triggerEventHandler('click',null);
      signupLinkDe.triggerEventHandler('click',null);

      fixture.detectChanges();
      expect(homeLink.navigatedTo[0]).toBe("/home",'when click Home link');
      expect(TemplatesLink.navigatedTo[0]).toBe("/templates", 'When click Templates link');
      expect(aboutLink.navigatedTo[0]).toBe("/about", 'When click About link');
      expect(loginLink.navigatedTo[0]).toBe("/login", 'When click login link');
      expect(signupLink.navigatedTo[0]).toBe("/signup", 'When click Signup link');
    });

  }
});
