import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {LoginComponent} from "./login.component";
import {By, BrowserModule} from "@angular/platform-browser";
import {RouterLinkStubDirective, RouterOutletStubComponent} from "../../testing/router-stubs";
import {DebugElement} from "@angular/core";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {FlashMessagesModule, FlashMessagesService} from "angular2-flash-messages";
import {LoginService} from "./login.service";
import {HttpModule} from "@angular/http";
import {RouterTestingModule} from "@angular/router/testing";



describe('LoginComponent Tests :', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debug : DebugElement;
  let links : RouterLinkStubDirective[];
  let linkDes : DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent ],
      imports : [
        ReactiveFormsModule, FormsModule, BrowserModule,
        FlashMessagesModule,HttpModule,RouterTestingModule,HttpModule
      ],
      providers : [FlashMessagesService,LoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement.query(By.css("[type='submit']"));
    component.ngOnInit();
    fixture.detectChanges();
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));
    links = linkDes.map(de => de.injector.get(RouterLinkStubDirective)as RouterLinkStubDirective);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get RouterLinks from html tamplate' ,() => {
    const signupLink = links[0].linkParams[0];
    expect(signupLink).toBe('/signup',  'this link should go to signup page ');
  });

  it('should click navigation links in tamplate',() => {
    const signupLinkDe = linkDes[0];
    const signupLink = links[0];
    expect(signupLink.navigatedTo).toBeNull('Signup link should not have navigated yet');
    signupLinkDe.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(signupLink.navigatedTo[0]).toBe("/signup", 'When click Signup link');
  });
  it('should click navigation links in tamplate',() => {
    const signupLinkDe = linkDes[0];
    const signupLink = links[0];
    expect(signupLink.navigatedTo).toBeNull('Signup link should not have navigated yet');
    signupLinkDe.triggerEventHandler('click',null);
    fixture.detectChanges();
    expect(signupLink.navigatedTo[0]).toBe("/signup", 'When click REGISTER NOEW ACCOUNT link');
  });

  describe('username Test: ', () => {
    it(' username field  validity  ', () => {
      let username = component.loginForm.get('username');
      expect(username.valid).toBeFalsy('should be initially invalid');
      let errors = username.errors || {}
      expect(errors['required']).toBeTruthy(' should be required');
    });
  });

  describe('password Test: ', () => {
    it(' password field  validity  ', () => {
      let password = component.loginForm.get('password');
      expect(password.valid).toBeFalsy('should be initially invalid');
      let errors = password.errors || {}
      expect(errors['required']).toBeTruthy(' should be required');
    });
  });

  describe('when on submit  : ',() => {
    it('the form should be invalid when it is empty ',() => {
      const  form = component.loginForm;
      debug.nativeElement.click();
      expect(form.invalid).toBeTruthy();
    });
  })
});
